import { Action } from '@ngrx/store';
import { type } from '../../util';

import { GROUPS } from '../common/index';

export const ActionTypes = {
  SET_USER_GROUPS: type(`[${GROUPS}] Set Groups`),
  UPDATE_USER_GROUPS: type(`[${GROUPS}] Update Groups`),
  CLEAR_USER_GROUPS: type(`[${GROUPS}] Clear Groups`),

};

export class SetUserGroupsAction implements Action {
  type = ActionTypes.SET_USER_GROUPS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateUserGroupsAction implements Action {
  type = ActionTypes.UPDATE_USER_GROUPS;

  constructor(public payload?: any) {
  }
}

export class ClearUserGroupsAction implements Action {
  type = ActionTypes.CLEAR_USER_GROUPS;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = SetUserGroupsAction | UpdateUserGroupsAction | ClearUserGroupsAction;
