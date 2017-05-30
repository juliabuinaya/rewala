import { IMyQuestionsGetState, myQuestionsGetInitialState } from '../states/my-questions-get.state';
import { Actions, ActionTypes } from '../actions/my-questions-get.actions';


export function myQuestionsGetReducer(
  state = myQuestionsGetInitialState,
  action: Actions
): IMyQuestionsGetState {
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
