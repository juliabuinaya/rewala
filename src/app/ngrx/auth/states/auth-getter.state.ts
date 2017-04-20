import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getAuthState = (state: IAppState) => state.auth;
export const getTokenFromState = createSelector(getAuthState, state => state.token);