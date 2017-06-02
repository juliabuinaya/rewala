import { IAnswersGetState, answersGetInitialState } from '../states/answers-get.state';
import { Actions, ActionTypes } from '../actions/answers-get.actions';


export function answersGetReducer(
  state = answersGetInitialState,
  action: Actions
): IAnswersGetState {
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
