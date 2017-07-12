export interface IPastQuestionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const pastQuestionsGetInitialState: IPastQuestionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
