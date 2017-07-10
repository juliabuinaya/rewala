import { compose } from '@ngrx/core/compose';

import { ICompletedQuestionsGetState } from './completed-questions-get.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';


export const completedQuestionsGetState = compose((state: IQuestionsRequestState) => {
  return <ICompletedQuestionsGetState>state.completedQuestionsGetState;
}, getQuestionsRequestState);
