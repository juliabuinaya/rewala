import { createSelector } from 'reselect';

import { IVoiceGivenQuestionsGetState } from './voice-given-questions-get.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';

export const voiceGivenQuestionsGetState = createSelector(getQuestionsRequestState, (state: IQuestionsRequestState) => {
  return state.voiceGivenQuestionsGetState;
});