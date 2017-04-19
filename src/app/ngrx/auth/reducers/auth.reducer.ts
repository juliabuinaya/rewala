import { IAuthState, initialState } from '../states/auth.state';
import { Actions, ActionTypes } from '../actions/auth.actions';

export function reducer(
  state = initialState,
  action: Actions): IAuthState {
    
  switch (action.type) {
    
    case ActionTypes.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload
      });
    
    case ActionTypes.GET_TOKEN_FROM_STORAGE:
      return Object.assign({}, state, {
        loading: true,
      });
  
    case ActionTypes.GET_TOKEN_FROM_STORAGE_SUCCESS:
    case ActionTypes.GET_TOKEN_FROM_STORAGE_FAIL:
      return Object.assign({}, state, {
        loading: false,
      });
    
    default: {
      return state;
    }
  }
}