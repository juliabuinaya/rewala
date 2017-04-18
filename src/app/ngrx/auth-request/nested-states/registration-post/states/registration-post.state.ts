export interface IRegistrationPostState {
  loading: boolean;
  loaded: boolean;
  status: string;
  data: any;
}
export const registrationPostInitialState: IRegistrationPostState = {
  loading: false,
  loaded: false,
  status: '',
  data: null
};
