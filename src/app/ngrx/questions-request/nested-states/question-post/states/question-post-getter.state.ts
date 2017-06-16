//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IQuestionPostState } from './question-post.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';

// states
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';



export const getGroupPostState = compose((state: IQuestionsRequestState) => {
  return <IQuestionPostState>state.questionPostState;
}, getQuestionsRequestState);
