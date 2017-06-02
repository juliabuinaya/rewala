import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { ANSWER_POST } from '../common/answer-post.common';

export const ActionTypes = {
  REQUEST: type(`[${ANSWER_POST}] Request`),
  REQUEST_SUCCESS: type(`[${ANSWER_POST}] Request Success`),
  REQUEST_FAIL: type(`[${ANSWER_POST}] Request Fail`),
};


export class AnswerPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class AnswerPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class AnswerPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = AnswerPostAction |
    AnswerPostSuccessAction |
    AnswerPostFailAction;
