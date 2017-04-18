//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { ISessionDeleteState } from './session-delete.state';
import { IAuthRequestState } from '../../../states/auth-request.state';

// states
import { getAuthRequestState } from '../../../states/auth-request-getter.state';


export const getSessionDeleteState = compose((state: IAuthRequestState) => {
  return state.sessionDeleteState;
}, getAuthRequestState);
