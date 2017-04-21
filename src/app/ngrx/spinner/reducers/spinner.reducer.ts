import { ISpinnerState, initialState } from '../states/spinner.state';
import { Actions, ActionTypes } from '../actions/spinner.actions';


export function reducer(
  state = initialState,
  action: Actions
): ISpinnerState {
    
  switch (action.type) {
  
    case ActionTypes.LOADING_START: {
      return Object.assign({}, state, {
        loading: true,
        content: action.payload
      });
    }
  
    case ActionTypes.LOADING_END: {
      return Object.assign({}, state, {
        loading: false,
        content: null
      });
    }
    
    default: {
      return state;
    }
    
  }
}
