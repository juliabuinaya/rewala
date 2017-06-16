import { compose } from '@ngrx/core/compose';

import { IGroupsGetState } from './groups-get.state';
import { IGroupsRequestState } from '../../../states/groups-request.state';
import { getGroupsRequestState } from '../../../states/groups-request-getter.state';


export const getGroupsGetState = compose((state: IGroupsRequestState) => {
  return <IGroupsGetState>state.groupsGetState;
}, getGroupsRequestState);
