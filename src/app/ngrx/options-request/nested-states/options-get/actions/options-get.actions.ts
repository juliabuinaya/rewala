import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { OPTIONS_GET } from '../common/options-get.common';

export const ActionTypes = {
  REQUEST: type(`[${OPTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${OPTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${OPTIONS_GET}] Request Fail`),
};


export class OptionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class OptionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class OptionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = OptionsGetAction |
  OptionsGetSuccessAction |
  OptionsGetFailAction;
