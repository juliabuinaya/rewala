export interface ICompletedQuestionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const completedQuestionsGetInitialState: ICompletedQuestionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
