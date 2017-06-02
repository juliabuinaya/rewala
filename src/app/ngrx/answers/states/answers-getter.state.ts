import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getAnswersState = (state: IAppState) => state.answers;
export const getAnswersEntitiesState = createSelector(getAnswersState, state => {
  return _.map(state.entities, (answer: any) => answer);
});

