import { Action } from '@ngrx/store';
import { type } from '../../util';

import { ANSWERS } from '../common/index';

export const ActionTypes = {
  SET_MY_ANSWERS: type(`[${ANSWERS}] Set My Answers`),
  UPDATE_MY_ANSWERS: type(`[${ANSWERS}] Update My Answers`),
  CLEAR_MY_ANSWERS: type(`[${ANSWERS}] Clear My Answers`),
  DELETE_MY_ANSWERS: type(`[${ANSWERS}] Delete My Answers`),
  CLEAR_ANSWERS: type(`[${ANSWERS}] Clear Answers`),
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

export class DeleteMyAnswersAction implements Action {
  type = ActionTypes.DELETE_MY_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export class ClearMyAnswersAction implements Action {
  type = ActionTypes.CLEAR_MY_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export class ClearAnswersAction implements Action {
  type = ActionTypes.CLEAR_ANSWERS;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = SetMyAnswersAction | UpdateMyAnswersAction | ClearMyAnswersAction | DeleteMyAnswersAction | ClearAnswersAction;
