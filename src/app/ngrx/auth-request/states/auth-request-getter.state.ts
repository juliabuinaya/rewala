import { IAppState } from '../../state/app.state';

export const getAuthRequestState = (state: IAppState) => state.authRequest;

// session
export * from '../nested-states/session-post/states/session-post-getter.state';
export * from '../nested-states/session-delete/states/session-delete-getter.state';
// registration
export * from '../nested-states/registration-post/states/registration-post-getter.state';
