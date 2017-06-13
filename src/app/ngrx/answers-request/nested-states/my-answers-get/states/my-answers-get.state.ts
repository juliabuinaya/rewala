export interface IMyAnswersGetState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const myAnswersGetInitialState: IMyAnswersGetState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
