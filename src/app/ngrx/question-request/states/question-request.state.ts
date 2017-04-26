export interface IQuestionRequestState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const initialState: IQuestionRequestState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
