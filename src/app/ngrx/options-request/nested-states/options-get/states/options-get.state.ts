export interface IOptionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const optionsGetInitialState: IOptionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
