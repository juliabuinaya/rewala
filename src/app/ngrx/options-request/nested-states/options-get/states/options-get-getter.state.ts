import { createSelector } from 'reselect';

import { IOptionsRequestState } from '../../../states/options-request.state';
import { getOptionsRequestState } from '../../../states/options-request-getter.state';


export const getOptionsGetState = createSelector(getOptionsRequestState, (state: IOptionsRequestState) => {
  return state.optionsGetState;
});

export const getOptionsGetLoadedState = createSelector(getOptionsGetState, state => {
  return state.loaded;
});
