import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { SESSION_POST } from '../common/session-post.common';

export const ActionTypes = {
  REQUEST: type(`[${SESSION_POST}] Request`),
  REQUEST_SUCCESS: type(`[${SESSION_POST}] Request Success`),
  REQUEST_FAIL: type(`[${SESSION_POST}] Request Fail`),
};


export class SessionPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class SessionPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class SessionPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = SessionPostAction |
  SessionPostSuccessAction |
  SessionPostFailAction;
