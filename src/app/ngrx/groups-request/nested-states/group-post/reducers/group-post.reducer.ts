import { IGroupPostState, groupPostInitialState } from '../states/group-post.state';
import { Actions, ActionTypes } from '../actions/group-post.actions';


export function groupPostReducer(
  state = groupPostInitialState,
  action: Actions
): IGroupPostState {
  switch (action.type) {
    
    case ActionTypes.REQUEST:

      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        status: '',
        data: null
      });
    
    case ActionTypes.REQUEST_SUCCESS:
    case ActionTypes.REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        status: action.payload.status,
        data: action.payload.data
      });
    
    default: {
      return state;
    }
    
  }
}
