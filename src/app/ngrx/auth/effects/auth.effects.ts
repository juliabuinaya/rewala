import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { SessionService } from '../../../core/services/session.service';
import { RoutingService } from '../../../core/services/routing.service';

//actions
import * as auth from '../actions/auth.actions';
import * as user from '../../user/actions/index';
import * as userRequest from '../../user-request/actions/index';
import * as sessionPost from '../../auth-request/nested-states/session-post/actions/session-post.actions';
import { SetTokenAction,
  GetTokenFromStorageAction,
  GetTokenFromStorageSuccessAction,
  GetTokenFromStorageFailAction,
  DeleteTokenAction} from '../actions/auth.actions';
import { UserGetAction } from '../../user-request/actions/index';

import { SignInPage } from '../../../pages/auth/sign-in/sign-in';


@Injectable()
export class AuthEffects {
  
  constructor(private actions$: Actions,
              public sessionService: SessionService,
              public routingService: RoutingService) {
  }
  
  @Effect()
  getTokenAfterInit$: Observable<Action> = this.actions$
  .ofType(auth.ActionTypes.GET_TOKEN_FROM_STORAGE)
  .startWith(new GetTokenFromStorageAction())
  .switchMap(() => {
      return this.sessionService.getAccessToken()
      .map(token => token ? new GetTokenFromStorageSuccessAction(token) : new GetTokenFromStorageFailAction())
      .catch(error => Observable.of(new GetTokenFromStorageFailAction(error)));
    }
  );
  
  @Effect()
  setTokenAfterLogin$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map((payload: any) => {
    let token = payload ? payload.id : null;
    this.sessionService.setAccessToken(token);
    return new SetTokenAction(token);
  });
  
  @Effect()
  tokenSuccess$: Observable<Action> = this.actions$
  .ofType(auth.ActionTypes.SET_TOKEN,
          auth.ActionTypes.GET_TOKEN_FROM_STORAGE_SUCCESS)
  .map(toPayload)
  .map((token: any) => new UserGetAction(token));
  
  @Effect({dispatch: false})
  tokenFail$: Observable<Action> = this.actions$
  .ofType(auth.ActionTypes.GET_TOKEN_FROM_STORAGE_FAIL)
  .do((action: any) => this.routingService.pushRootPage(SignInPage));
  
  @Effect()
  removeToken$: Observable<Action> = this.actions$
  .ofType(user.ActionTypes.CLEAR_USER,
          userRequest.ActionTypes.GET_REQUEST_FAIL)
  .map(() => {
    this.sessionService.removeAccessToken();
    this.routingService.pushRootPage(SignInPage);
    return new DeleteTokenAction();
  });
  
}