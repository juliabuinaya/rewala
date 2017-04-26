import { IGroupGetState, groupGetInitialState } from '../states/group-get.state';
import { Actions, ActionTypes } from '../actions/group-get.actions';


export function groupGetReducer(
  state = groupGetInitialState,
  action: Actions
): IGroupGetState {
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
