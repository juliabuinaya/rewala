import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { UserModel } from '../../../shared/models/user.model';

//actions
import { SetUserAction } from '../actions/index'
import * as userRequest from '../../user-request/actions/index';

@Injectable()
export class UserEffects {
  
  constructor(private actions$: Actions) {
  }
  
  @Effect()
  userGetRequest$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new SetUserAction(new UserModel(payload)));


  //@Effect()
  //populateUser$: Observable<Action> = this.actions$
  //.ofType(
  //  authRequest.SessionPostActionTypes.REQUEST_SUCCESS,
  //  myRequest.ProfileGetActionTypes.REQUEST_SUCCESS,
  //  myRequest.ProfilePatchActionTypes.REQUEST_SUCCESS
  //)
  //.map((action: any) => {
  //  return new user.SetUserAction(action.payload.data);
  //});
  //
  //
  //@Effect()
  //clearUser$: Observable<Action> = this.actions$
  //.ofType(
  //  authRequest.SessionDeleteActionTypes.REQUEST_SUCCESS,
  //  myRequest.ProfileGetActionTypes.REQUEST_FAIL
  //)
  //.map((action: any) => {
  //  return new user.ClearUserAction();
  //});
  //
  //constructor(
  //    private store: Store<IAppState>,
  //    private actions$: Actions,
  //) {
  //}

}
