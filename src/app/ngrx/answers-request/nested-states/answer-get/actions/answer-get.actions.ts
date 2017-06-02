import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { ANSWER_GET } from '../common/answer-get.common';

export const ActionTypes = {
  REQUEST: type(`[${ANSWER_GET}] Request`),
  REQUEST_SUCCESS: type(`[${ANSWER_GET}] Request Success`),
  REQUEST_FAIL: type(`[${ANSWER_GET}] Request Fail`),
};


export class AnswerGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: any) {
  }
}

export class AnswerGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}

export class AnswerGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}

export type Actions = AnswerGetAction | AnswerGetSuccessAction | AnswerGetFailAction;
