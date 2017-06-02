//lib
import { createSelector } from 'reselect';

//interfaces
import { IAnswerGetState } from './answer-get.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';

// states
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';


export const getAnswerGetState = createSelector(getAnswersRequestState, (state: IAnswersRequestState) => {
  return state.answerGetState;
});
export const getAnswerGetLoadedState = createSelector(getAnswerGetState, (state: IAnswerGetState) => {
  return state.loaded;
});
