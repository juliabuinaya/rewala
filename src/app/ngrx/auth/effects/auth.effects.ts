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


import { SignInPage } from '../../../pages/auth/sign-in/sign-in';
import { DashboardPage } from '../../../pages/dashboard/dashboard';

@Injectable()
export class AuthEffects {
  
  constructor(private actions$: Actions,
              public sessionService: SessionService,
              public routingService: RoutingService) {
  }
  
  //@Effect() setJWTAfterInit$: Observable<Action> = this.actions$
  //.ofType(myRequest.ProfileGetActionTypes.REQUEST)
  //.map(payload => {
  //  let jwt: string = this.authService.getJWT() || null;
  //  return new auth.SetJWTAction(jwt);
  //});
  
  @Effect()
  getTokenAfterInit$: Observable<Action> = this.actions$
  .ofType(auth.ActionTypes.GET_TOKEN_FROM_STORAGE)
  .startWith(new GetTokenFromStorageAction())
  .switchMap(() => {
      return this.sessionService.getAccessToken()
      .map(token => token ? new GetTokenFromStorageSuccessAction() : new GetTokenFromStorageFailAction())
      .catch(error => Observable.of(new GetTokenFromStorageFailAction(error)));
    }
  );
  
  @Effect()
  setTokenAfterLogin$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map((payload: any) => {
    let token = payload.id;
    this.sessionService.setAccessToken(token);
    return new SetTokenAction(token);
  });
  
  @Effect({dispatch: false})
  tokenFail$: Observable<Action> = this.actions$
  .ofType(auth.ActionTypes.GET_TOKEN_FROM_STORAGE_FAIL)
  .do((action: any) => {
    this.routingService.pushRootPage(SignInPage);
  });
  
  @Effect({dispatch: false})
  tokenSuccess$: Observable<Action> = this.actions$
  .ofType(auth.ActionTypes.GET_TOKEN_FROM_STORAGE_SUCCESS)
  .do((action: any) => {
    
    // here need to do req for user with token
    this.routingService.pushRootPage(DashboardPage);
  });
  
  //
  //@Effect({dispatch: false})
  //redirectToDashboard$: Observable<Action> = this.actions$
  //.ofType(
  //  authRequest.SessionPostActionTypes.REQUEST_SUCCESS,
  //  authRequest.RegistrationPatchActionTypes.REQUEST_SUCCESS
  //)
  //.do((action: any) => {
  //  this.routerext.navigate(['/dashboard']);
  //});
  
  
}