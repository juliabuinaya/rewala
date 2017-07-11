import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getResultsState = (state: IAppState) => state.results;

export const getResultsEntitiesState = createSelector(getResultsState, state => {
  return _.map(state.entities, (result: any) => result);
});