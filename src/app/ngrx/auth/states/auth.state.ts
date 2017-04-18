export interface IAuthState {
  isGuest: boolean;
  token?: string;
}
export const initialState: IAuthState = {
  isGuest: true,
  token: null,
};