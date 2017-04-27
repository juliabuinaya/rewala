import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getGroupsState = (state: IAppState) => state.groups;
export const getGroupsEntitiesState = createSelector(getGroupsState, state => {
  return _.map(state.entities, (group: any) => group);
});

//export const getGroupsNamesIdsFromState = createSelector(getGroupsState, state => {
//  return _.map(state.entities, (group: any) =>
//    ({
//      id: group.id,
//      name: group.name
//    })
//  );
//});

