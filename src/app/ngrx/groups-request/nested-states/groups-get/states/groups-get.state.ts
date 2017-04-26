export interface IGroupsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const groupsGetInitialState: IGroupsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
