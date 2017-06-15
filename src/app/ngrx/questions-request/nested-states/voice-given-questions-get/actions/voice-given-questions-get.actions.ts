import { Action } from '@ngrx/store';
import { type } from '../../../../util';

import { VOICE_GIVEN_QUESTIONS_GET } from '../common/voice-given-questions-get.common';

export const ActionTypes = {
  REQUEST: type(`[${VOICE_GIVEN_QUESTIONS_GET}] Request`),
  REQUEST_SUCCESS: type(`[${VOICE_GIVEN_QUESTIONS_GET}] Request Success`),
  REQUEST_FAIL: type(`[${VOICE_GIVEN_QUESTIONS_GET}] Request Fail`),
};


export class VoiceGivenQuestionsGetAction implements Action {
  type = ActionTypes.REQUEST;
  
  constructor(public payload?: string) {
  }
}
export class VoiceGivenQuestionsGetSuccessAction implements Action {
  type = ActionTypes.REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}
export class VoiceGivenQuestionsGetFailAction implements Action {
  type = ActionTypes.REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}


export type Actions = VoiceGivenQuestionsGetAction |
  VoiceGivenQuestionsGetSuccessAction |
  VoiceGivenQuestionsGetFailAction;
