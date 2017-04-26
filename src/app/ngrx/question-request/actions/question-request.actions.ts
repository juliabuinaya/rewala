import { Action } from '@ngrx/store';
import { type } from '../../util';

import { QUESTION_REQUEST } from '../common/index';

export const ActionTypes = {
  GET_REQUEST: type(`[${QUESTION_REQUEST}] Get Request`),
  GET_REQUEST_SUCCESS: type(`[${QUESTION_REQUEST}] Get Request Success`),
  GET_REQUEST_FAIL: type(`[${QUESTION_REQUEST}] Get Request Fail`),
};

export class QuestionGetAction implements Action {
  type = ActionTypes.GET_REQUEST;

  constructor(public payload?: any) {
  }
}

export class QuestionGetSuccessAction implements Action {
  type = ActionTypes.GET_REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class QuestionGetFailAction implements Action {
  type = ActionTypes.GET_REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = QuestionGetAction | QuestionGetSuccessAction | QuestionGetFailAction;
