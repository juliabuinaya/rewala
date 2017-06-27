import { IAnswersChangeState, answersChangeInitialState } from '../states/answers-change.state';
import { Actions, ActionTypes } from '../actions/answers-change.actions';


export function answersChangeReducer(
  state = answersChangeInitialState,
  action: Actions
): IAnswersChangeState {
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
