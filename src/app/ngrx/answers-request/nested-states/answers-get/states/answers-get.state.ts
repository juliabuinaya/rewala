export interface IAnswersGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const answersGetInitialState: IAnswersGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
