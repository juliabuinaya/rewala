import { IUserRequestState, initialState } from '../states/user-request.state';
import { Actions, ActionTypes } from '../actions/user-request.actions';


export function reducer(
  state = initialState,
  action: Actions
): IUserRequestState {
    
  switch (action.type) {
  
    case ActionTypes.GET_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        status: '',
        data: null
      });
    }
  
    case ActionTypes.GET_REQUEST_SUCCESS:
    case ActionTypes.GET_REQUEST_FAIL:
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
