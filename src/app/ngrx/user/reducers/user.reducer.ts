import { IUserState, initialState } from '../states/user.state';
import { Actions, ActionTypes } from '../actions/user.actions';


export function reducer(
  state = initialState,
  action: Actions
): IUserState {
  switch (action.type) {
  
    case ActionTypes.SET_USER: {
      return Object.assign({}, state, action.payload);
    }
  
    case ActionTypes.CLEAR_USER: {
      return Object.assign({}, state, {
        username: null,
        email: null,
        id: null,
        createdAt: null,
        updatedAt: null
      });
    }

    case ActionTypes.UPDATE_USER: {
      return Object.assign({}, state, {
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
      });
    }
    
    default: {
      return state;
    }
    
  }
}
