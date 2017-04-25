import { Action } from '@ngrx/store';
import { type } from '../../util';

import { USER } from '../common/index';

export const ActionTypes = {
  SET_USER: type(`[${USER}] Set User`),
  CLEAR_USER: type(`[${USER}] Clear User`),
  UPDATE_USER: type(`[${USER}] Update User`),

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

export type Actions
  = SetUserAction | ClearUserAction | UpdateUserAction;
