import { IGroupsState, initialState } from '../states/groups.state';
import { Actions, ActionTypes } from '../actions/groups.actions';
import { GroupModel } from '../../../shared/models/group.model';

import * as _ from 'lodash';

export function reducer(
  state = initialState,
  action: Actions
): IGroupsState {
  switch (action.type) {
  
    case ActionTypes.SET_USER_GROUPS:
    case ActionTypes.UPDATE_USER_GROUPS: {
      if(!_.isArray(action.payload)) {
        action.payload = [action.payload];
      }
      let groups = action.payload;
      let groupsIds = groups.map(group => group.id);
      let groupsEntities = groups.reduce((entities: { [id: string]: any }, group: any) => {
        return Object.assign(entities, {
          [group.id]: new GroupModel(group)
        });
      }, {});
      return {
        ids: [...state.ids, ...groupsIds],
        entities: Object.assign({}, state.entities, groupsEntities)
      };
    }
    
    case ActionTypes.CLEAR_USER_GROUPS:
      return Object.assign({}, state, initialState);
      
    default: {
      return state;
    }
    
  }
}
