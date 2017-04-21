import { Action } from '@ngrx/store';
import { type } from '../../util';

import { SPINNER } from '../common/index';

export const ActionTypes = {
  LOADING_START: type(`[${SPINNER}] Loading start`),
  LOADING_END: type(`[${SPINNER}] Loading end`)
};

export class SpinnerLoadingStartAction implements Action {
  type = ActionTypes.LOADING_START;

  constructor(public payload?: any) {
  }
}

export class SpinnerLoadingEndAction implements Action {
  type = ActionTypes.LOADING_END;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = SpinnerLoadingStartAction | SpinnerLoadingEndAction;
