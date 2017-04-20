import { IUserState, initialState } from '../states/user.state';
import { Actions, ActionTypes } from '../actions/user.actions';
import * as _ from 'lodash';

//import { setUuidToId, setEntities, getIdsArrEntities } from  '../../utils/util';


export function reducer(
  state = initialState,
  action: Actions
): IUserState {
  switch (action.type) {
  
    case ActionTypes.SET_USER: {
      return Object.assign({}, state, {
        currentUserId: null,
      });
    }
  
    case ActionTypes.CLEAR_USER: {
      return Object.assign({}, state, {
        currentUserId: null,
      });
    }

    case ActionTypes.UPDATE_USER: {
      //let curState = _.cloneDeep(state);
      //curState.entities[curState.currentUserId] = Object.assign(curState.entities[curState.currentUserId], action.payload);

      //return Object.assign({}, state, curState);
    }
    
    default: {
      return state;
    }
    
  }
}
