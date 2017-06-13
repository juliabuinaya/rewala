import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { MY_ANSWERS_GET } from '../common/my-answers-get.common';

export const ActionTypes = {
  REQUEST: type(`[${MY_ANSWERS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${MY_ANSWERS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${MY_ANSWERS_GET}] Request Fail`),
};


export class MyAnswersGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class MyAnswersGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class MyAnswersGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = MyAnswersGetAction |
  MyAnswersGetSuccessAction |
  MyAnswersGetFailAction;
