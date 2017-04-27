export interface IQuestionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const questionsGetInitialState: IQuestionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
