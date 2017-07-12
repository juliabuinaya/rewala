import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { PAST_QUESTIONS_GET } from '../common/past-questions-get.common';

export const ActionTypes = {
  REQUEST: type(`[${PAST_QUESTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${PAST_QUESTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${PAST_QUESTIONS_GET}] Request Fail`),
};


export class PastQuestionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class PastQuestionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class PastQuestionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = PastQuestionsGetAction |
  PastQuestionsGetSuccessAction |
  PastQuestionsGetFailAction;
