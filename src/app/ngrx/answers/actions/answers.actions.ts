import { Action } from '@ngrx/store';
import { type } from '../../util';

import { ANSWERS } from '../common/index';

export const ActionTypes = {
  SET_MY_ANSWERS: type(`[${ANSWERS}] Set My Answers`),
  UPDATE_MY_ANSWERS: type(`[${ANSWERS}] Update My Answers`),
  CLEAR_MY_ANSWERS: type(`[${ANSWERS}] Clear My Answers`),

};

export class SetMyAnswersAction implements Action {
  type = ActionTypes.SET_MY_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateMyAnswersAction implements Action {
  type = ActionTypes.UPDATE_MY_ANSWERS;

  constructor(public payload?: any) {
  }
}

export class ClearMyAnswersAction implements Action {
  type = ActionTypes.CLEAR_MY_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = SetMyAnswersAction | UpdateMyAnswersAction | ClearMyAnswersAction;
