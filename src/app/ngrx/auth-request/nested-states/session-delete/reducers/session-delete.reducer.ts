import { ISessionDeleteState, sessionDeleteInitialState } from '../states/session-delete.state';
import { Actions, ActionTypes } from '../actions/session-delete.actions';


export function sessionDeleteReducer(
  state = sessionDeleteInitialState,
  action: Actions
): ISessionDeleteState {
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
