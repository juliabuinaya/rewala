export interface IGroupGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const groupGetInitialState: IGroupGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
