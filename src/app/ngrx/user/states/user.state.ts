export interface IUserState {
  username: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
export const initialState: IUserState = {
  username: null,
  email: null,
  id: null,
  createdAt: null,
  updatedAt: null
}
