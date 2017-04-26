import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { GROUPS_GET } from '../common/groups-get.common';

export const ActionTypes = {
  REQUEST: type(`[${GROUPS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${GROUPS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${GROUPS_GET}] Request Fail`),
};


export class GroupsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class GroupsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class GroupsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = GroupsGetAction |
    GroupsGetSuccessAction |
    GroupsGetFailAction;
