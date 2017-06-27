//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IAnswerDeleteState } from './answer-delete.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';

// states
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';



export const getAnswerDeleteState = compose((state: IAnswersRequestState) => {
  return <IAnswerDeleteState>state.answerDeleteState;
}, getAnswersRequestState);
