export interface IContactsRequestState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const initialState: IContactsRequestState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
