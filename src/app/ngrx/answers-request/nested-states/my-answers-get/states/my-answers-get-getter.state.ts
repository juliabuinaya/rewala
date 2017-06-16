import { compose } from '@ngrx/core/compose';

import { IMyAnswersGetState } from './my-answers-get.state';
import { IAnswersRequestState } from '../../../states/answers-request.state';
import { getAnswersRequestState } from '../../../states/answers-request-getter.state';


export const myAnswersGetState = compose((state: IAnswersRequestState) => {
  return <IMyAnswersGetState>state.myAnswersGetState;
}, getAnswersRequestState);
