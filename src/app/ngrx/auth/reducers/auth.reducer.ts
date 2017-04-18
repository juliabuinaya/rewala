import { IAuthState, initialState } from '../states/auth.state';
import { Actions, ActionTypes } from '../actions/auth.actions';

export function reducer(
  state = initialState,
  action: Actions): IAuthState {
    
  switch (action.type) {
    
    case ActionTypes.SET_TOKEN:
      return Object.assign({}, state, {
        token: action.payload,
      });
    
    //case ActionTypes.SET_GUEST_IS_TRUE:
    //  return Object.assign({}, state, {
    //    isGuest: true,
    //  });
    //
    //case ActionTypes.SET_GUEST_IS_FALSE:
    //  return Object.assign({}, state, {
    //    isGuest: false,
    //  });
    
    default: {
      return state;
    }
  }
}