import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { SessionService } from '../../../core/services/session.service';
import { RoutingService } from '../../../core/services/routing.service';

import * as auth from '../actions/auth.actions';
import * as sessionPost from '../../auth-request/nested-states/session-post/actions/session-post.actions';
import { SetTokenAction,
  GetTokenFromStorageAction,
  GetTokenFromStorageSuccessAction,
  GetTokenFromStorageFailAction } from '../actions/auth.actions';

import { UserGetAction } from '../../user-request/actions/index';


import { SignInPage } from '../../../pages/auth/sign-in/sign-in';
import { DashboardPage } from '../../../pages/dashboard/dashboard';

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
}