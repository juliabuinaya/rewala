export interface IQuestionPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const questionPostInitialState: IQuestionPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
