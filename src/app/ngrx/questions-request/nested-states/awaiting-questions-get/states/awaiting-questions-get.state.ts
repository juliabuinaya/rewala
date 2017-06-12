export interface IAwaitingQuestionsGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const awaitingQuestionsGetInitialState: IAwaitingQuestionsGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
