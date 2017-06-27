import { compose } from '@ngrx/core/compose';

import { IAnswersChangeState } from './answers-change.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';


export const getAnswersChangeState = compose((state: IAnswersRequestState) => {
  return <IAnswersChangeState>state.answersChangeState;
}, getAnswersRequestState);
