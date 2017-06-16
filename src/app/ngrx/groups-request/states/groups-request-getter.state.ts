import { IAppState } from '../../state/app.state';

export const getGroupsRequestState = (state: IAppState) => state.groupsRequest;

// session
export * from '../nested-states/groups-get/states/groups-get-getter.state';
export * from '../nested-states/group-get/states/group-get-getter.state';
export * from '../nested-states/groups-post/states/groups-post-getter.state';
export * from '../nested-states/group-post/states/group-post-getter.state';
