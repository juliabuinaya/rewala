import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getOptionsState = (state: IAppState) => state.options;

export const getOptionsEntitiesState = createSelector(getOptionsState, state => {
  return _.map(state.entities, (question: any) => question);
});

export const getOptionsCurrentEntitiesState = createSelector(getOptionsState, state => {
  return state.currentEntitiesIds.map(key => {
    return state.entities[key];
  });
});