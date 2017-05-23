import { IOptionsGetState, optionsGetInitialState } from '../states/options-get.state';
import { Actions, ActionTypes } from '../actions/options-get.actions';


export function optionsGetReducer(
  state = optionsGetInitialState,
  action: Actions
): IOptionsGetState {
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
