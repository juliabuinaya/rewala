//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IQuestionDeleteState } from './question-delete.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';

// states
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';



export const getQuestionDeleteState = compose((state: IQuestionsRequestState) => {
  return <IQuestionDeleteState>state.questionDeleteState;
}, getQuestionsRequestState);
