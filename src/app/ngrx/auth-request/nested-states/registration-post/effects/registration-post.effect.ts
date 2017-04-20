import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as registrationPost from '../actions/registration-post.actions';
import { RegistrationPostSuccessAction, RegistrationPostFailAction } from '../actions/index';
import { SessionPostAction } from '../../session-post/actions/index';

import { AuthService } from '../../../../../core/services/index';


@Injectable()
export class RegistrationPostEffects {
  
  constructor(private actions$: Actions,
              public authService: AuthService) {
  }

  @Effect()
  registrationPost$: Observable<Action> = this.actions$
  .ofType(registrationPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.authService.signUpRequest(payload)
    .map((res: any) => new RegistrationPostSuccessAction(payload))
    .catch(error => Observable.of(new RegistrationPostFailAction(error)));
  });
  
  @Effect()
  registrationPostSuccess$: Observable<Action> = this.actions$
  .ofType(registrationPost.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new SessionPostAction(payload));

}
