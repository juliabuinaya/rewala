import { Action } from '@ngrx/store';
import { type } from '../../util';

import { OPTIONS } from '../common/index';

export const ActionTypes = {
  SET_OPTIONS: type(`[${OPTIONS}] Set Options`),
  CLEAR_OPTIONS: type(`[${OPTIONS}] Clear Options`),
  UPDATE_OPTIONS: type(`[${OPTIONS}] Update Options`),
  SET_CURRENT_OPTIONS: type(`[${OPTIONS}] Set Current Options`),
  CLEAR_CURRENT_OPTIONS: type(`[${OPTIONS}] Clear Current Options`),
  UPDATE_CURRENT_OPTIONS: type(`[${OPTIONS}] Update Current Options`),
};

export class SetOptionsAction implements Action {
  type = ActionTypes.SET_OPTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearOptionsAction implements Action {
  type = ActionTypes.CLEAR_OPTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateOptionsAction implements Action {
  type = ActionTypes.UPDATE_OPTIONS;

  constructor(public payload?: any) {
  }
}

export class SetCurrentOptionsAction implements Action {
  type = ActionTypes.SET_CURRENT_OPTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearCurrentOptionsAction implements Action {
  type = ActionTypes.CLEAR_CURRENT_OPTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateCurrentOptionsAction implements Action {
  type = ActionTypes.UPDATE_CURRENT_OPTIONS;
  
  constructor(public payload?: any) {
  }
}


export type Actions
  = SetOptionsAction | ClearOptionsAction | UpdateOptionsAction |
  SetCurrentOptionsAction | ClearCurrentOptionsAction | UpdateCurrentOptionsAction;
