import { Action } from '@ngrx/store';
import { type } from '../../util';

import { RESULTS_REQUEST } from '../common/index';

export const ActionTypes = {
  GET_REQUEST: type(`[${RESULTS_REQUEST}] Get Request`),
  GET_REQUEST_SUCCESS: type(`[${RESULTS_REQUEST}] Get Request Success`),
  GET_REQUEST_FAIL: type(`[${RESULTS_REQUEST}] Get Request Fail`),
};

export class ResultsGetAction implements Action {
  type = ActionTypes.GET_REQUEST;

  constructor(public payload?: any) {
  }
}

export class ResultsGetSuccessAction implements Action {
  type = ActionTypes.GET_REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class ResultsGetFailAction implements Action {
  type = ActionTypes.GET_REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = ResultsGetAction | ResultsGetSuccessAction | ResultsGetFailAction;
