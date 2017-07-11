import { IResultsState, initialState } from '../states/results.state';
import { Actions, ActionTypes } from '../actions/results.actions';
import { ResultModel } from '../../../shared/models/result.model';

export function reducer(
  state = initialState,
  action: Actions
): IResultsState {
    
  switch (action.type) {
  
    case ActionTypes.SET_RESULTS:
    case ActionTypes.UPDATE_RESULTS: {
      let entities = action.payload;
      return {
        ...state,
        entities
      };
    }
    
    case ActionTypes.CLEAR_RESULTS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
