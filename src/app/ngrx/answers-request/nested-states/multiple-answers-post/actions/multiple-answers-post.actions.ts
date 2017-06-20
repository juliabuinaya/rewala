import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { MULTIPLE_ANSWERS_POST } from '../common/multiple-answers-post.common';

export const ActionTypes = {
  REQUEST: type(`[${MULTIPLE_ANSWERS_POST}] Request`),
  REQUEST_SUCCESS: type(`[${MULTIPLE_ANSWERS_POST}] Request Success`),
  REQUEST_FAIL: type(`[${MULTIPLE_ANSWERS_POST}] Request Fail`),
};


export class MultipleAnswersPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class MultipleAnswersPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class MultipleAnswersPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = MultipleAnswersPostAction |
    MultipleAnswersPostSuccessAction |
    MultipleAnswersPostFailAction;
