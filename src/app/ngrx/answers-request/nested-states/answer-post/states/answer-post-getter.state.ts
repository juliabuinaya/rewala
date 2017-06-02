//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IAnswerPostState } from './answer-post.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';

// states
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';



export const getAnswerPostState = compose((state: IAnswersRequestState) => {
  return state.answerPostState;
}, getAnswersRequestState);
