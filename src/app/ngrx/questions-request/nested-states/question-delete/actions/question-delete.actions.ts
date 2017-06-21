import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { QUESTION_DELETE } from '../common/question-delete.common';

export const ActionTypes = {
  REQUEST: type(`[${QUESTION_DELETE}] Request`),
  REQUEST_SUCCESS: type(`[${QUESTION_DELETE}] Request Success`),
  REQUEST_FAIL: type(`[${QUESTION_DELETE}] Request Fail`),
};


export class QuestionDeleteAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class QuestionDeleteSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class QuestionDeleteFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = QuestionDeleteAction |
  QuestionDeleteSuccessAction |
  QuestionDeleteFailAction;
