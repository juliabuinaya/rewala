import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { SESSION_DELETE } from '../common/session-delete.common';

export const ActionTypes = {
  REQUEST: type(`[${SESSION_DELETE}] Request`),
  REQUEST_SUCCESS: type(`[${SESSION_DELETE}] Request Success`),
  REQUEST_FAIL: type(`[${SESSION_DELETE}] Request Fail`),
};


export class SessionDeleteAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class SessionDeleteSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class SessionDeleteFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = SessionDeleteAction |
  SessionDeleteSuccessAction |
  SessionDeleteFailAction;
