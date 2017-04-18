export interface ISessionPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const sessionPostInitialState: ISessionPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
