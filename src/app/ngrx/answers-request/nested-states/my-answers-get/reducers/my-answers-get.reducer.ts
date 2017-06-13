import { IMyAnswersGetState, myAnswersGetInitialState } from '../states/my-answers-get.state';
import { Actions, ActionTypes } from '../actions/my-answers-get.actions';


export function myAnswersGetReducer(
  state = myAnswersGetInitialState,
  action: Actions
): IMyAnswersGetState {
  switch (action.type) {
    
    case ActionTypes.REQUEST:

      return Object.assign({}, state, {
        loading: true,
        loaded: false,
      });
    
    case ActionTypes.REQUEST_SUCCESS:
    case ActionTypes.REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
      });
    
    default: {
      return state;
    }
    
  }
}
