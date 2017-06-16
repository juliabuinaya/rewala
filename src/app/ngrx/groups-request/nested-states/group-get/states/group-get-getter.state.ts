import { createSelector } from 'reselect';

//interfaces
import { IGroupGetState } from './group-get.state';
import { IGroupsRequestState } from '../../../states/groups-request.state';

// states
import { getGroupsRequestState } from '../../../states/groups-request-getter.state';


export const getGroupGetState = createSelector(getGroupsRequestState, (state: IGroupsRequestState) => {
  return state.groupGetState;
});
export const getGroupGetLoadedState = createSelector(getGroupGetState, (state: IGroupGetState) => {
  return state.loaded;
});
