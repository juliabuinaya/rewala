export interface IMultipleAnswersPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const multipleAnswersPostInitialState: IMultipleAnswersPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
