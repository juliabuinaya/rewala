import { compose } from '@ngrx/core/compose';

import { IQuestionsGetState } from './questions-get.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';


export const getQuestionsGetState = compose((state: IQuestionsRequestState) => {
  return <IQuestionsGetState>state.questionsGetState;
}, getQuestionsRequestState);
