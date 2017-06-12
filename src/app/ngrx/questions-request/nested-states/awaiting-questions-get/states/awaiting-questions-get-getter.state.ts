import { compose } from '@ngrx/core/compose';

import { IAwaitingQuestionsGetState } from './awaiting-questions-get.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';


export const awaitingQuestionsGetState = compose((state: IQuestionsRequestState) => {
  return state.awaitingQuestionsGetState;
}, getQuestionsRequestState);
