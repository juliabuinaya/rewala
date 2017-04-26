import { groupsRequestInitialState, IGroupsRequestState  } from '../states/groups-request.state';

import {
  groupsGetReducer,
  groupGetReducer,
  groupPostReducer
} from './index';


export function groupsRequestReducer(
  state = groupsRequestInitialState,
  action
): IGroupsRequestState {
  return {
    groupsGetState: groupsGetReducer(state.groupsGetState, action),
    groupGetState: groupGetReducer(state.groupGetState, action),
    groupPostState: groupPostReducer(state.groupPostState, action)
  };
}
