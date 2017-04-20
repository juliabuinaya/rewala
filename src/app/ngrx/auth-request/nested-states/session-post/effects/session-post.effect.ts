import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { AuthService } from '../../../../../core/services/index';
import { Observable } from 'rxjs';

//actions
import * as sessionPost from '../actions/session-post.actions';
import { SessionPostSuccessAction, SessionPostFailAction } from '../actions/index';

@Injectable()
export class SessionPostEffects {
  
  constructor(public actions$: Actions,
              public authService: AuthService) {
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
  
  //@Effect({dispatch: false})
  //redirectToSignInPage$: Observable<Action> = this.actions$
  //.ofType(sessionPost.ActionTypes.REQUEST_FAIL)
  //.do((action: any) => this.routingService.pushRootPage(SignInPage));

}
