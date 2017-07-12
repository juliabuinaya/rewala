import { IPastQuestionsGetState, pastQuestionsGetInitialState } from '../states/past-questions-get.state';
import { Actions, ActionTypes } from '../actions/past-questions-get.actions';


export function pastQuestionsGetReducer(
  state = pastQuestionsGetInitialState,
  action: Actions
): IPastQuestionsGetState {
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
