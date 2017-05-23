export interface IOptionsPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const optionsPostInitialState: IOptionsPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
