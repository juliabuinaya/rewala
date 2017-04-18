import { ISessionPostState, sessionPostInitialState } from '../states/session-post.state';
import { Actions, ActionTypes } from '../actions/session-post.actions';


export function sessionPostReducer(
  state = sessionPostInitialState,
  action: Actions
): ISessionPostState {
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
