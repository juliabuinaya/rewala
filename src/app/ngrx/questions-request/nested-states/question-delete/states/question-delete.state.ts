export interface IQuestionDeleteState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const questionDeleteInitialState: IQuestionDeleteState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
