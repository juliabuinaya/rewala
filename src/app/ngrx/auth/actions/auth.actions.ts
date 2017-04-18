import { Action } from '@ngrx/store';
import { type } from '../../util';

import { AUTH } from '../common/auth.common';

export const ActionTypes = {
  SET_TOKEN: type(`[${AUTH}] Set Token`),
  //SET_GUEST_IS_TRUE: type(`[${AUTH}] Set Guest Is True`),
  //SET_GUEST_IS_FALSE: type(`[${AUTH}] Set Guest Is False`)
};

export class SetTokenAction implements Action {
  type = ActionTypes.SET_TOKEN;
  
  constructor(public payload?: string) {
  }
}

//export class SetGuestIsTrueAction implements Action {
//  type = ActionTypes.SET_GUEST_IS_TRUE;
//
//  constructor(public payload?: string) {
//  }
//}
//export class SetGuestIsFalseAction implements Action {
//  type = ActionTypes.SET_GUEST_IS_FALSE;
//
//  constructor(public payload?: string) {
//  }
//}


export type Actions = SetTokenAction ;
  //|
  //SetGuestIsTrueAction |
  //SetGuestIsFalseAction
  //;