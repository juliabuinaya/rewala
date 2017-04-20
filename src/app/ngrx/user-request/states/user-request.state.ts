export interface IUserRequestState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const initialState: IUserRequestState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
