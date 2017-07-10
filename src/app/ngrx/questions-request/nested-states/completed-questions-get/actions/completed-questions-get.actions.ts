import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { COMPLETED_QUESTIONS_GET } from '../common/completed-questions-get.common';

export const ActionTypes = {
  REQUEST: type(`[${COMPLETED_QUESTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${COMPLETED_QUESTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${COMPLETED_QUESTIONS_GET}] Request Fail`),
};


export class CompletedQuestionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class CompletedQuestionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class CompletedQuestionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = CompletedQuestionsGetAction |
  CompletedQuestionsGetSuccessAction |
  CompletedQuestionsGetFailAction;
