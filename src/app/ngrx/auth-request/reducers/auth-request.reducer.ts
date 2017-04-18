import { IAuthRequestState, authRequestInitialState } from '../states/auth-request.state';

import {
  // session
  sessionPostReducer,
  sessionDeleteReducer,
  
  // registration
  registrationPostReducer,
} from './index';


export function authRequestReducer(
  state = authRequestInitialState,
  action
): IAuthRequestState {
  return {
    sessionPostState: sessionPostReducer(state.sessionPostState, action),
    sessionDeleteState: sessionDeleteReducer(state.sessionDeleteState, action),
    
    registrationPostState: registrationPostReducer(state.registrationPostState, action)
  };
}
