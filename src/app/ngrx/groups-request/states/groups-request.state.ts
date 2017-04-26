import { IGroupsGetState, IGroupGetState, IGroupPostState } from './index';

export interface IGroupsRequestState {
  groupsGetState?: IGroupsGetState;
  groupGetState?: IGroupGetState;
  groupPostState?: IGroupPostState;
}

export const groupsRequestInitialState: IGroupsRequestState = {};
