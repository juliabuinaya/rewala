import { IGroupsState, initialState } from '../states/groups.state';
import { Actions, ActionTypes } from '../actions/groups.actions';


export function reducer(
  state = initialState,
  action: Actions
): IGroupsState {
  switch (action.type) {
  
    case ActionTypes.SET_USER_GROUPS:
    case ActionTypes.UPDATE_USER_GROUPS: {
      console.log(action.payload);
      return state;
    }
      
    default: {
      return state;
    }
    
  }
}
