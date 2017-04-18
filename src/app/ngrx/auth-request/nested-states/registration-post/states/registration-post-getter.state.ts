//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IRegistrationPostState } from './registration-post.state';
import { IAuthRequestState } from '../../../states/auth-request.state';

// states
import { getAuthRequestState } from '../../../states/auth-request-getter.state';


export const getRegistrationPostState = compose((state: IAuthRequestState) => {
  return state.registrationPostState;
}, getAuthRequestState);
