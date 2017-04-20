export interface IAuthState {
  loading: boolean;
  token?: string;
}
export const initialState: IAuthState = {
  loading: false,
  token: null
};