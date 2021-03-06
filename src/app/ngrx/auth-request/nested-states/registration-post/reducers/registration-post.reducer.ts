import { IRegistrationPostState, registrationPostInitialState } from '../states/registration-post.state';
import { Actions, ActionTypes } from '../actions/registration-post.actions';


export function registrationPostReducer(
  state = registrationPostInitialState,
  action: Actions
): IRegistrationPostState {
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
