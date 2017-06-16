//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IGroupPostState } from './group-post.state';
import { IGroupsRequestState } from '../../../states/groups-request.state';

// states
import { getGroupsRequestState } from '../../../states/groups-request-getter.state';



export const getGroupPostState = compose((state: IGroupsRequestState) => {
  return <IGroupPostState>state.groupPostState;
}, getGroupsRequestState);
