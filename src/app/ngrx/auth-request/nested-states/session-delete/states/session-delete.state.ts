export interface ISessionDeleteState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const sessionDeleteInitialState: ISessionDeleteState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
