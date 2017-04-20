import { Action } from '@ngrx/store';
import { type } from '../../util';

import { USER_REQUEST } from '../common/index';

export const ActionTypes = {
  GET_REQUEST: type(`[${USER_REQUEST}] Get Request`),
  GET_REQUEST_SUCCESS: type(`[${USER_REQUEST}] Get Request Success`),
  GET_REQUEST_FAIL: type(`[${USER_REQUEST}] Get Request Fail`),
};

export class UserGetAction implements Action {
  type = ActionTypes.GET_REQUEST;

  constructor(public payload?: any) {
  }
}

export class UserGetSuccessAction implements Action {
  type = ActionTypes.GET_REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class UserGetFailAction implements Action {
  type = ActionTypes.GET_REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = UserGetAction | UserGetSuccessAction | UserGetFailAction;
