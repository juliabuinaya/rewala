// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

// module
import * as registrationPost from '../actions/registration-post.actions';
import { RegistrationPostAction, RegistrationPostSuccessAction, RegistrationPostFailAction } from '../actions/index';

//app
import {
  AuthService,
} from '../../../../../core/services/index';


@Injectable()
export class RegistrationPostEffects {
  
  constructor(private actions$: Actions, public authService: AuthService) {
  }

  @Effect()
  registrationPost$: Observable<Action> = this.actions$
  .ofType(registrationPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.authService.signUpRequest(payload)
    .map((res: any) => new RegistrationPostSuccessAction(res))
    .catch(error => Observable.of(new RegistrationPostFailAction(error)));
  });
  
  //@Effect({dispatch: false})
  //showErrorToastr: Observable<Action> = this.actions$
  //.ofType(
  //  registrationPost.ActionTypes.REQUEST_FAIL,
  //)
  //.do((action: any) => {
  //  this.toastrService.showEffectsMsg(action.payload);
  //});

}
