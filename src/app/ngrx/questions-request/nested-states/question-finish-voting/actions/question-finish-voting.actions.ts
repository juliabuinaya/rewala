import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { QUESTION_FINISH_VOTING } from '../common/question-finish-voting.common';

export const ActionTypes = {
  REQUEST: type(`[${QUESTION_FINISH_VOTING}] Request`),
  REQUEST_SUCCESS: type(`[${QUESTION_FINISH_VOTING}] Request Success`),
  REQUEST_FAIL: type(`[${QUESTION_FINISH_VOTING}] Request Fail`),
};


export class QuestionFinishVotingAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class QuestionFinishVotingSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload: any) {
  }
}
export class QuestionFinishVotingFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload: any) {
  }
}


export type Actions = QuestionFinishVotingAction |
  QuestionFinishVotingSuccessAction |
  QuestionFinishVotingFailAction;
