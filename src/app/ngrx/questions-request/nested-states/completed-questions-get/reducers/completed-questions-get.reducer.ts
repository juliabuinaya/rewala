import { ICompletedQuestionsGetState, completedQuestionsGetInitialState } from '../states/completed-questions-get.state';
import { Actions, ActionTypes } from '../actions/completed-questions-get.actions';


export function completedQuestionsGetReducer(
  state = completedQuestionsGetInitialState,
  action: Actions
): ICompletedQuestionsGetState {
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
