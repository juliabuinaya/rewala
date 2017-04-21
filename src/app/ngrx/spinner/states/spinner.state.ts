export interface ISpinnerState {
  loading: boolean;
  content: string;
}
export const initialState: ISpinnerState = {
  loading: false,
  content: null
};
