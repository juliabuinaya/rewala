import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { GROUP_POST } from '../common/group-post.common';

export const ActionTypes = {
  REQUEST: type(`[${GROUP_POST}] Request`),
  REQUEST_SUCCESS: type(`[${GROUP_POST}] Request Success`),
  REQUEST_FAIL: type(`[${GROUP_POST}] Request Fail`),
};


export class GroupPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class GroupPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class GroupPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = GroupPostAction |
    GroupPostSuccessAction |
    GroupPostFailAction;
