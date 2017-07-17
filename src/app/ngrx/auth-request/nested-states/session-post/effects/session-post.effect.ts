import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { AuthService, SocketService } from '../../../../../core/services/index';
import { Observable } from 'rxjs';

//actions
import * as sessionPost from '../actions/session-post.actions';
import * as registrationPost from '../../registration-post/actions/registration-post.actions';
import * as userRequest from '../../../../user-request/actions/user-request.actions';
import { SessionPostSuccessAction, SessionPostFailAction } from '../actions/index';
import { SpinnerLoadingStartAction, SpinnerLoadingEndAction } from '../../../../spinner/actions/index';
import { SessionPostAction } from '../actions/session-post.actions';

@Injectable()
export class SessionPostEffects {
  
  constructor(public actions$: Actions,
              public authService: AuthService,
              public socketService: SocketService) {
  }

  @Effect()
  sessionPost$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.authService.signInRequest(payload)
    .map((res: any) => new SessionPostSuccessAction(res))
    .catch(error => Observable.of(new SessionPostFailAction(error)));
  });
  
  @Effect()
  registrationPostSuccess$: Observable<Action> = this.actions$
  .ofType(registrationPost.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new SessionPostAction(payload));
  
  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction('Logging in...'));
  
  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST_FAIL)
  .map((action: any) => new SpinnerLoadingEndAction());
  
  @Effect({dispatch: false})
  socketCreateQuestion$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .do(() => this.socketService.subscribeTo('create'));
}
