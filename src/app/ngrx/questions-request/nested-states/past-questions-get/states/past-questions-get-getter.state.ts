import { compose } from '@ngrx/core/compose';

import { IPastQuestionsGetState } from './past-questions-get.state';
import { IQuestionsRequestState } from '../../../states/questions-request.state';
import { getQuestionsRequestState } from '../../../states/questions-request-getter.state';


export const pastQuestionsGetState = compose((state: IQuestionsRequestState) => {
  return <IPastQuestionsGetState>state.pastQuestionsGetState;
}, getQuestionsRequestState);
