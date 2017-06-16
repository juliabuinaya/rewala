import { compose } from '@ngrx/core/compose';

import { IAnswersGetState } from './answers-get.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';


export const getAnswersGetState = compose((state: IAnswersRequestState) => {
  return <IAnswersGetState>state.answersGetState;
}, getAnswersRequestState);
