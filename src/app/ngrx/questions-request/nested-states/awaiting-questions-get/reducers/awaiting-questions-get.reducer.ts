import { IAwaitingQuestionsGetState, awaitingQuestionsGetInitialState } from '../states/awaiting-questions-get.state';
import { Actions, ActionTypes } from '../actions/awaiting-questions-get.actions';


export function awaitingQuestionsGetReducer(
  state = awaitingQuestionsGetInitialState,
  action: Actions
): IAwaitingQuestionsGetState {
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
