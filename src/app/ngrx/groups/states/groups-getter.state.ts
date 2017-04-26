import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getGroupsState = (state: IAppState) => state.groups;

