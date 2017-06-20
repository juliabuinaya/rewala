//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IMultipleAnswersPostState } from './multiple-answers-post.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';

// states
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';


export const getMultipleAnswersPostState = compose((state: IAnswersRequestState) => {
  return <IMultipleAnswersPostState>state.answerPostState;
}, getAnswersRequestState);
