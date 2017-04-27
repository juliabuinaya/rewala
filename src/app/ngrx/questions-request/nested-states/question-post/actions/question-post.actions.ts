import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { QUESTION_POST } from '../common/question-post.common';

export const ActionTypes = {
  REQUEST: type(`[${QUESTION_POST}] Request`),
  REQUEST_SUCCESS: type(`[${QUESTION_POST}] Request Success`),
  REQUEST_FAIL: type(`[${QUESTION_POST}] Request Fail`),
};


export class QuestionPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class QuestionPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class QuestionPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = QuestionPostAction |
  QuestionPostSuccessAction |
  QuestionPostFailAction;
