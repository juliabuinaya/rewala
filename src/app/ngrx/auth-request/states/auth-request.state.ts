// states
import {
  //session
  ISessionPostState,
  ISessionDeleteState,
  
  // registration
  IRegistrationPostState,

} from './index';

export interface IAuthRequestState {
  sessionPostState?: ISessionPostState;
  sessionDeleteState?: ISessionDeleteState;
  
  registrationPostState?: IRegistrationPostState;
}

export const authRequestInitialState: IAuthRequestState = {};
