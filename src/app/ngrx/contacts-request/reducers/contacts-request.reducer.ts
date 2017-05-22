import { IContactsRequestState, initialState } from '../states/contacts-request.state';
import { Actions, ActionTypes } from '../actions/contacts-request.actions';


export function reducer(
  state = initialState,
  action: Actions
): IContactsRequestState {
    
  switch (action.type) {
  
    case ActionTypes.GET_REQUEST:
    case ActionTypes.FIND_BY_EMAIL_GET_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        status: '',
        data: null
      });
    }
  
    case ActionTypes.GET_REQUEST_SUCCESS:
    case ActionTypes.FIND_BY_EMAIL_GET_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        status: 'success',
        data: action.payload.data
      });
  
    case ActionTypes.GET_REQUEST_FAIL:
    case ActionTypes.FIND_BY_EMAIL_GET_REQUEST_FAIL:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        status: 'fail',
        data: action.payload.data
      });
    
    default: {
      return state;
    }
    
  }
}
