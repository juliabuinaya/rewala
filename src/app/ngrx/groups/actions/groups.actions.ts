import { Action } from '@ngrx/store';
import { type } from '../../util';

import { GROUPS } from '../common/index';

export const ActionTypes = {
  SET_USER_GROUPS: type(`[${GROUPS}] Set Groups`),
  UPDATE_USER_GROUPS: type(`[${GROUPS}] Update Groups`),

};

export class SetUserAction implements Action {
  type = ActionTypes.SET_USER_GROUPS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateGroupAction implements Action {
  type = ActionTypes.UPDATE_USER_GROUPS;

  constructor(public payload?: any) {
  }
}

export type Actions
  = SetUserAction | UpdateGroupAction;
