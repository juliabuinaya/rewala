import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { ANSWER_DELETE } from '../common/answer-delete.common';

export const ActionTypes = {
  REQUEST: type(`[${ANSWER_DELETE}] Request`),
  REQUEST_SUCCESS: type(`[${ANSWER_DELETE}] Request Success`),
  REQUEST_FAIL: type(`[${ANSWER_DELETE}] Request Fail`),
};


export class AnswerDeleteAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class AnswerDeleteSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class AnswerDeleteFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = AnswerDeleteAction |
    AnswerDeleteSuccessAction |
    AnswerDeleteFailAction;
