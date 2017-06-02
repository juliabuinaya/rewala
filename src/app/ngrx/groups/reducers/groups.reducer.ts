import { IGroupsState, initialState } from '../states/groups.state';
import { Actions, ActionTypes } from '../actions/groups.actions';
import { updateEntities } from '../../util';
import { GroupModel } from '../../../shared/models/group.model';


export function reducer(
  state = initialState,
  action: Actions
): IGroupsState {
  switch (action.type) {
  
    case ActionTypes.SET_USER_GROUPS:
    case ActionTypes.UPDATE_USER_GROUPS: {
      let updatedGroups = updateEntities(action.payload, GroupModel);
      return {
        ids: [...state.ids, ...updatedGroups.entitiesIds],
        entities: Object.assign({}, state.entities, updatedGroups.entities)
      };
    }
    
    case ActionTypes.CLEAR_USER_GROUPS:
      return Object.assign({}, state, initialState);
      
    default: {
      return state;
    }
    
  }
}
