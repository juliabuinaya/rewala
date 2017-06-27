export interface IAnswerDeleteState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const answerDeleteInitialState: IAnswerDeleteState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
