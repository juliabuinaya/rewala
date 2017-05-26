import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getContactsState = (state: IAppState) => state.contacts;

export const getContactsEntitiesState = createSelector(getContactsState, state => {
  return _.map(state.entities, (contact: any) => contact);
});

export const getContactsMyEntitiesState = createSelector(getContactsState, state => {
  return state.myEntitiesIds.map(key => {
    return state.entities[key];
  });
});

export const getContactsFoundEntitiesState = createSelector(getContactsState, state => {
  return state.foundEntitiesIds.map(key => {
    return state.entities[key];
  });
});