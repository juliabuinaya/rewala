// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';


// module
import * as sessionPost from '../actions/session-post.actions';
import {
  SessionPostAction, SessionPostSuccessAction, SessionPostFailAction,
} from '../actions/index';

//app
import { AuthService } from '../../../../../core/services/index';


@Injectable()
export class SessionPostEffects {

  //@Effect()
  //sessionPost$: Observable<Action> = this.actions$
  //.ofType(sessionPost.ActionTypes.REQUEST)
  //.do(action => console.log(`Action: ${action.type}; Effect: ${this.constructor.name}`))
  //.switchMap((action: any) => {
  //  return this.authService.loginRequest(action.payload)
  //  .map((res: any) => new SessionPostSuccessAction(res))
  //  .catch(error => Observable.of(new SessionPostFailAction(error)));
  //});
  //
  //@Effect({dispatch: false})
  //showErrorToastr: Observable<Action> = this.actions$
  //.ofType(
  //  sessionPost.ActionTypes.REQUEST_FAIL,
  //)
  //.do((action: any) => {
  //  this.toastrService.showEffectsMsg(action.payload);
  //});

  constructor(
      private actions$: Actions,
      private authService: AuthService
  ) {
  }
}
