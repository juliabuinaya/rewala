export interface IGroupPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const groupPostInitialState: IGroupPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
