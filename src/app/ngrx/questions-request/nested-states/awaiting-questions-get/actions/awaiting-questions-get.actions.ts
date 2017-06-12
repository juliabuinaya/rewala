import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { AWAITING_QUESTIONS_GET } from '../common/awaiting-questions-get.common';

export const ActionTypes = {
  REQUEST: type(`[${AWAITING_QUESTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${AWAITING_QUESTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${AWAITING_QUESTIONS_GET}] Request Fail`),
};


export class AwaitingQuestionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class AwaitingQuestionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class AwaitingQuestionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = AwaitingQuestionsGetAction |
  AwaitingQuestionsGetSuccessAction |
  AwaitingQuestionsGetFailAction;
