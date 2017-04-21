import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getUserState = (state: IAppState) => state.user;
export const getUsernameFromState = createSelector(getUserState, state => state.username);
export const getEmailFromState = createSelector(getUserState, state => state.email);
export const getIdFromState = createSelector(getUserState, state => state.id);
