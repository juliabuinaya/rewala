export interface IAnswerGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const answerGetInitialState: IAnswerGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
