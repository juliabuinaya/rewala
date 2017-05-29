import { IOptionsPostState, optionsPostInitialState } from '../states/options-post.state';
import { Actions, ActionTypes } from '../actions/options-post.actions';


export function optionsPostReducer(
  state = optionsPostInitialState,
  action: Actions
): IOptionsPostState {
  switch (action.type) {
    
    case ActionTypes.REQUEST:
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    
    case ActionTypes.REQUEST_SUCCESS:
    case ActionTypes.REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    
    default: {
      return state;
    }
    
  }
}
