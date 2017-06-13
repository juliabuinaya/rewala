import * as _ from 'lodash';

import { IAnswersState, initialState } from '../states/answers.state';
import { Actions, ActionTypes } from '../actions/answers.actions';
import { updateEntities } from '../../util';
import { AnswerModel } from '../../../shared/models/answer.model';

export function reducer(
  state = initialState,
  action: Actions
): IAnswersState {
  
  switch (action.type) {
    
    case ActionTypes.SET_MY_ANSWERS:
    case ActionTypes.UPDATE_MY_ANSWERS: {
      let updatedAnswers = updateEntities(action.payload, AnswerModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedAnswers.entitiesIds),
        entities: Object.assign({}, state.entities, updatedAnswers.entities),
        myEntitiesIds: _.union(state.myEntitiesIds, updatedAnswers.entitiesIds),
      };
    }
  
    case ActionTypes.CLEAR_MY_ANSWERS:
      return {
        ...state,
        myEntitiesIds: []
      };
      
    case ActionTypes.CLEAR_ANSWERS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
