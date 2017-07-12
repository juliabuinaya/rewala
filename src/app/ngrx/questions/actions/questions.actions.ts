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
  
  SET_COMPLETED_QUESTIONS: type(`[${QUESTIONS}] Set Completed Questions`),
  CLEAR_COMPLETED_QUESTIONS: type(`[${QUESTIONS}] Clear Completed Questions`),
  UPDATE_COMPLETED_QUESTIONS: type(`[${QUESTIONS}] Update Completed Questions`),
  UPDATE_COMPLETED_QUESTIONS_IDS: type(`[${QUESTIONS}] Update Completed Questions Ids`),
  
  SET_PAST_QUESTIONS: type(`[${QUESTIONS}] Set Past Questions`),
  CLEAR_PAST_QUESTIONS: type(`[${QUESTIONS}] Clear Past Questions`),
  UPDATE_PAST_QUESTIONS: type(`[${QUESTIONS}] Update Past Questions`),
  
  DELETE_QUESTION: type(`[${QUESTIONS}] Delete Question`),
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

export class SetCompletedQuestionsAction implements Action {
  type = ActionTypes.SET_COMPLETED_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearCompletedQuestionsAction implements Action {
  type = ActionTypes.CLEAR_COMPLETED_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateCompletedQuestionsAction implements Action {
  type = ActionTypes.UPDATE_COMPLETED_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateCompletedQuestionsIdsAction implements Action {
  type = ActionTypes.UPDATE_COMPLETED_QUESTIONS_IDS;
  
  constructor(public payload?: any) {
  }
}

export class SetPastQuestionsAction implements Action {
  type = ActionTypes.SET_PAST_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class ClearPastQuestionsAction implements Action {
  type = ActionTypes.CLEAR_PAST_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class UpdatePastQuestionsAction implements Action {
  type = ActionTypes.UPDATE_PAST_QUESTIONS;
  
  constructor(public payload?: any) {
  }
}

export class DeleteQuestionAction implements Action {
  type = ActionTypes.DELETE_QUESTION;
  
  constructor(public payload?: any) {
  }
}


export type Actions
  = SetQuestionsAction | ClearQuestionsAction | UpdateQuestionsAction |
  SetMyQuestionsAction | ClearMyQuestionsAction | UpdateMyQuestionsAction |
  SetAwaitingQuestionsAction | ClearAwaitingQuestionsAction | UpdateAwaitingQuestionsAction |
  SetCompletedQuestionsAction | ClearCompletedQuestionsAction | UpdateCompletedQuestionsAction |
  UpdateCompletedQuestionsIdsAction | DeleteQuestionAction | SetPastQuestionsAction | ClearPastQuestionsAction |
  UpdatePastQuestionsAction;
