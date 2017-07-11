import { Action } from '@ngrx/store';
import { type } from '../../util';

import { RESULTS } from '../common/index';

export const ActionTypes = {
  SET_RESULTS: type(`[${RESULTS}] Set Results`),
  CLEAR_RESULTS: type(`[${RESULTS}] Clear Results`),
  UPDATE_RESULTS: type(`[${RESULTS}] Update Results`),
};

export class SetResultsAction implements Action {
  type = ActionTypes.SET_RESULTS;
  
  constructor(public payload?: any) {
  }
}

export class ClearResultsAction implements Action {
  type = ActionTypes.CLEAR_RESULTS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateResultsAction implements Action {
  type = ActionTypes.UPDATE_RESULTS;

  constructor(public payload?: any) {
  }
}


export type Actions
  = SetResultsAction | ClearResultsAction | UpdateResultsAction;
