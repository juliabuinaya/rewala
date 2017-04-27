import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { QUESTIONS_GET } from '../common/questions-get.common';

export const ActionTypes = {
  REQUEST: type(`[${QUESTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${QUESTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${QUESTIONS_GET}] Request Fail`),
};


export class QuestionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class QuestionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class QuestionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = QuestionsGetAction |
  QuestionsGetSuccessAction |
  QuestionsGetFailAction;
