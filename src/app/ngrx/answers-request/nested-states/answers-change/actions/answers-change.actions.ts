import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { ANSWERS_CHANGE } from '../common/answers-change.common';

export const ActionTypes = {
  REQUEST: type(`[${ANSWERS_CHANGE}] Request`),
  REQUEST_SUCCESS: type(`[${ANSWERS_CHANGE}] Request Success`),
  REQUEST_FAIL: type(`[${ANSWERS_CHANGE}] Request Fail`),
};


export class AnswersChangeAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class AnswersChangeSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class AnswersChangeFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = AnswersChangeAction |
    AnswersChangeSuccessAction |
    AnswersChangeFailAction;
