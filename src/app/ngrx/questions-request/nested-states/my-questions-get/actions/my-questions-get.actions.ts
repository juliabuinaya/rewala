import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { MY_QUESTIONS_GET } from '../common/my-questions-get.common';

export const ActionTypes = {
  REQUEST: type(`[${MY_QUESTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${MY_QUESTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${MY_QUESTIONS_GET}] Request Fail`),
};


export class MyQuestionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class MyQuestionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class MyQuestionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = MyQuestionsGetAction |
  MyQuestionsGetSuccessAction |
  MyQuestionsGetFailAction;
