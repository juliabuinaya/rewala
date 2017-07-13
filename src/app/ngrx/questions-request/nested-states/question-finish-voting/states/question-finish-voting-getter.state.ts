//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IQuestionFinishVotingState } from './question-finish-voting.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';

// states
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';



export const getQuestionFinishVotingState = compose((state: IQuestionsRequestState) => {
  return <IQuestionFinishVotingState>state.questionFinishVotingState;
}, getQuestionsRequestState);
