import { Action } from '@ngrx/store';
import { type } from '../../util';

import { QUESTIONS } from '../common/index';

export const ActionTypes = {
  SET_QUESTIONS: type(`[${QUESTIONS}] Set Questions`),
  CLEAR_QUESTIONS: type(`[${QUESTIONS}] Clear Questions`),
  UPDATE_QUESTIONS: type(`[${QUESTIONS}] Update Questions`),
  SET_MY_QUESTIONS: type(`[${QUESTIONS}] Set My Questions`),
  CLEAR_MY_QUESTIONS: type(`[${QUESTIONS}] Clear My Questions`),
  UPDATE_MY_QUESTIONS: type(`[${QUESTIONS}] Update My Questions`),
  SET_AWAITING_QUESTIONS: type(`[${QUESTIONS}] Set Awaiting Questions`),
  CLEAR_AWAITING_QUESTIONS: type(`[${QUESTIONS}] Clear Awaiting Questions`),
  UPDATE_AWAITING_QUESTIONS: type(`[${QUESTIONS}] Update Awaiting Questions`),
  SET_VOICE_GIVEN_QUESTIONS: type(`[${QUESTIONS}] Set Voice Given Questions`),
  CLEAR_VOICE_GIVEN_QUESTIONS: type(`[${QUESTIONS}] Clear Voice Given Questions`),
  UPDATE_VOICE_GIVEN_QUESTIONS: type(`[${QUESTIONS}] Update Voice Given Questions`),
};

export class SetQuestionsAction implements Action {
  type = ActionTypes.SET_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearQuestionsAction implements Action {
  type = ActionTypes.CLEAR_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateQuestionsAction implements Action {
  type = ActionTypes.UPDATE_QUESTIONS;

  constructor(public payload?: any) {
  }
}

export class SetMyQuestionsAction implements Action {
  type = ActionTypes.SET_MY_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearMyQuestionsAction implements Action {
  type = ActionTypes.CLEAR_MY_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateMyQuestionsAction implements Action {
  type = ActionTypes.UPDATE_MY_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class SetAwaitingQuestionsAction implements Action {
  type = ActionTypes.SET_AWAITING_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearAwaitingQuestionsAction implements Action {
  type = ActionTypes.CLEAR_AWAITING_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateAwaitingQuestionsAction implements Action {
  type = ActionTypes.UPDATE_AWAITING_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class SetVoiceGivenQuestionsAction implements Action {
  type = ActionTypes.SET_VOICE_GIVEN_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearVoiceGivenQuestionsAction implements Action {
  type = ActionTypes.CLEAR_VOICE_GIVEN_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateVoiceGivenQuestionsAction implements Action {
  type = ActionTypes.UPDATE_VOICE_GIVEN_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}


export type Actions
  = SetQuestionsAction | ClearQuestionsAction | UpdateQuestionsAction |
  SetMyQuestionsAction | ClearMyQuestionsAction | UpdateMyQuestionsAction |
  SetAwaitingQuestionsAction | ClearAwaitingQuestionsAction | UpdateAwaitingQuestionsAction;
