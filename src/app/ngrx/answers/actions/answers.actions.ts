import { Action } from '@ngrx/store';
import { type } from '../../util';

import { ANSWERS } from '../common/index';

export const ActionTypes = {
  SET_ANSWERS: type(`[${ANSWERS}] Set Answers`),
  UPDATE_ANSWERS: type(`[${ANSWERS}] Update Answers`),
  CLEAR_ANSWERS: type(`[${ANSWERS}] Clear Answers`),

};

export class SetAnswersAction implements Action {
  type = ActionTypes.SET_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateAnswersAction implements Action {
  type = ActionTypes.UPDATE_ANSWERS;

  constructor(public payload?: any) {
  }
}

export class ClearAnswersAction implements Action {
  type = ActionTypes.CLEAR_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = SetAnswersAction | UpdateAnswersAction | ClearAnswersAction;
