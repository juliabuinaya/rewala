export interface IAnswersChangeState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const answersChangeInitialState: IAnswersChangeState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
