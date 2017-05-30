export interface IMyQuestionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const myQuestionsGetInitialState: IMyQuestionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
