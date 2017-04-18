// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

// module
import * as sessionDelete from '../actions/session-delete.actions';
import {
  SessionDeleteAction, SessionDeleteSuccessAction, SessionDeleteFailAction,
} from '../actions/index';

//app
import { AuthService } from '../../../../../core/services/index';


@Injectable()
export class SessionDeleteEffects {

  //@Effect()
  //sessionDelete$: Observable<Action> = this.actions$
  //.ofType(sessionDelete.ActionTypes.REQUEST)
  //.switchMap((action: any) => {
  //  return this.authService.logoutRequest()
  //  .map((res: any) => new SessionDeleteSuccessAction(res))
  //  .catch(error => Observable.of(new SessionDeleteFailAction(error)));
  //});
  //
  //@Effect({dispatch: false})
  //showErrorToastr: Observable<Action> = this.actions$
  //.ofType(
  //  sessionDelete.ActionTypes.REQUEST_FAIL
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
