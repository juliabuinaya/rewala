import { compose } from '@ngrx/core/compose';

import { IOptionsGetState } from './options-get.state';
import { IOptionsRequestState } from '../../../states/options-request.state';
import { getOptionsRequestState } from '../../../states/options-request-getter.state';


export const getOptionsGetState = compose((state: IOptionsRequestState) => {
  return state.optionsPostState;
}, getOptionsRequestState);
