import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { ANSWERS_GET } from '../common/answers-get.common';

export const ActionTypes = {
  REQUEST: type(`[${ANSWERS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${ANSWERS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${ANSWERS_GET}] Request Fail`),
};


export class AnswersGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class AnswersGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class AnswersGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = AnswersGetAction |
    AnswersGetSuccessAction |
    AnswersGetFailAction;
