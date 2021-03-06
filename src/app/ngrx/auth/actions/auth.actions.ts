import { Action } from '@ngrx/store';
import { type } from '../../util';

import { AUTH } from '../common/auth.common';

export const ActionTypes = {
  SET_TOKEN: type(`[${AUTH}] Set Token`),
  GET_TOKEN_FROM_STORAGE: type(`[${AUTH}] Get Token From Storage`),
  GET_TOKEN_FROM_STORAGE_SUCCESS: type(`[${AUTH}] Get Token From Storage Success`),
  GET_TOKEN_FROM_STORAGE_FAIL: type(`[${AUTH}] Get Token From Storage Fail`),
  DELETE_TOKEN: type(`[${AUTH}] Delete Token`),
};

export class SetTokenAction implements Action {
  type = ActionTypes.SET_TOKEN;
  
  constructor(public payload?: string) {
  }
}

export class DeleteTokenAction implements Action {
  type = ActionTypes.DELETE_TOKEN;
  
  constructor(public payload?: string) {
  }
}

export class GetTokenFromStorageAction implements Action {
  type = ActionTypes.GET_TOKEN_FROM_STORAGE;
  
  constructor(public payload?: string) {
  }
}

export class GetTokenFromStorageSuccessAction implements Action {
  type = ActionTypes.GET_TOKEN_FROM_STORAGE_SUCCESS;
  
  constructor(public payload?: string) {
  }
}

export class GetTokenFromStorageFailAction implements Action {
  type = ActionTypes.GET_TOKEN_FROM_STORAGE_FAIL;
  
  constructor(public payload?: string) {
  }
}

export type Actions = SetTokenAction
  | DeleteTokenAction
  | GetTokenFromStorageAction
  | GetTokenFromStorageSuccessAction
  | GetTokenFromStorageFailAction;