export interface IResultsRequestState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const initialState: IResultsRequestState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
