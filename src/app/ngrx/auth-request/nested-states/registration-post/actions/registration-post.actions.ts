import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { REGISTRATION_POST } from '../common/registration-post.common';

export const ActionTypes = {
  REQUEST: type(`[${REGISTRATION_POST}] Request`),
  REQUEST_SUCCESS: type(`[${REGISTRATION_POST}] Request Success`),
  REQUEST_FAIL: type(`[${REGISTRATION_POST}] Request Fail`),
};

export class RegistrationPostAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class RegistrationPostSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class RegistrationPostFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = RegistrationPostAction |
  RegistrationPostSuccessAction |
  RegistrationPostFailAction;
