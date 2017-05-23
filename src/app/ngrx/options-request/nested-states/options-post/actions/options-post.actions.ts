import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { OPTIONS_POST } from '../common/options-post.common';

export const ActionTypes = {
  REQUEST: type(`[${OPTIONS_POST}] Request`),
  REQUEST_SUCCESS: type(`[${OPTIONS_POST}] Request Success`),
  REQUEST_FAIL: type(`[${OPTIONS_POST}] Request Fail`),
};


export class OptionsPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class OptionsPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class OptionsPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = OptionsPostAction |
  OptionsPostSuccessAction |
  OptionsPostFailAction;
