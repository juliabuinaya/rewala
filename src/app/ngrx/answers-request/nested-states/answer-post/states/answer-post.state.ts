export interface IAnswerPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const answerPostInitialState: IAnswerPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
