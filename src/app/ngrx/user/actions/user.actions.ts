import { Action } from '@ngrx/store';
import { type } from '../../util';

import { USER } from '../common/index';

export const ActionTypes = {
  SET_USER: type(`[${USER}] Set User`),
  CLEAR_USER: type(`[${USER}] Clear User`),
  UPDATE_USER: type(`[${USER}] Update User`),
  
  //LOAD_MY_PROFILE: type(`[${USER}] Load My Profile`),
  //LOAD_MY_PROFILE_SUCCESS: type(`[${USER}] Load My Profile Success`),
  //LOAD_MY_PROFILE_FAIL: type(`[${USER}] Load My Profile Fail`),
};

export class SetUserAction implements Action {
  type = ActionTypes.SET_USER;
  
  constructor(public payload?: any) {
  }
}

export class ClearUserAction implements Action {
  type = ActionTypes.CLEAR_USER;
  
  constructor(public payload?: any) {
  }
}

export class UpdateUserAction implements Action {
  type = ActionTypes.UPDATE_USER;

  constructor(public payload?: any) {
  }
}

//export class LoadMyProfileAction implements Action {
//  type = ActionTypes.LOAD_MY_PROFILE;
//
//  constructor(public payload?: string) {
//  }
//}
//export class LoadMyProfileSuccessAction implements Action {
//  type = ActionTypes.LOAD_MY_PROFILE_SUCCESS;
//
//  constructor(public payload?: any) {
//  }
//}
//export class LoadMyProfileFailAction implements Action {
//  type = ActionTypes.LOAD_MY_PROFILE_FAIL;
//
//  constructor(public payload?: any) {
//  }
//}

export type Actions
  = SetUserAction | ClearUserAction | UpdateUserAction;
