import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getContactsState = (state: IAppState) => state.contacts;

export const getContactsEntitiesState = createSelector(getContactsState, state => {
  return _.map(state.entities, (contact: any) => contact);
});

export const getContactsFoundEntitiesState = createSelector(getContactsState, state => {
  return state.foundEntitiesIds.map(key => {
    return state.entities[key];
  });
});