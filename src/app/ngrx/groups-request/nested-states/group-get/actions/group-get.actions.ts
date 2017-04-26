import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { GROUP_GET } from '../common/group-get.common';

export const ActionTypes = {
  REQUEST: type(`[${GROUP_GET}] Request`),
  REQUEST_SUCCESS: type(`[${GROUP_GET}] Request Success`),
  REQUEST_MY_GROUP_SUCCESS: type(`[${GROUP_GET}] My Group Request Success`),
  REQUEST_FAIL: type(`[${GROUP_GET}] Request Fail`),
};


export class GroupGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: any) {
  }
}
export class GroupGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class MyGroupGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;

  constructor(public payload: any) {
  }
}
export class GroupGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = GroupGetAction |
    GroupGetSuccessAction | MyGroupGetSuccessAction |
    GroupGetFailAction
    ;
