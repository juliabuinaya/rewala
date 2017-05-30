import { compose } from '@ngrx/core/compose';

import { IMyQuestionsGetState } from './my-questions-get.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';


export const myQuestionsGetState = compose((state: IQuestionsRequestState) => {
  return state.questionPostState;
}, getQuestionsRequestState);
