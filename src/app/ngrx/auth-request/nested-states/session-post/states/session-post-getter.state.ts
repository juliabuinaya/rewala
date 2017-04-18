//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { ISessionPostState } from './session-post.state';
import { IAuthRequestState } from '../../../states/auth-request.state';

// states
import { getAuthRequestState } from '../../../states/auth-request-getter.state';


export const getSessionPostState = compose((state: IAuthRequestState) => {
  return state.sessionPostState;
}, getAuthRequestState);
