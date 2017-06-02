import * as _ from 'lodash';

import { IQuestionsState, initialState } from '../states/questions.state';
import { Actions, ActionTypes } from '../actions/questions.actions';
import { updateEntities } from '../../util';
import { QuestionModel } from '../../../shared/models/question.model';


export function reducer(
  state = initialState,
  action: Actions
): IQuestionsState {
    
  switch (action.type) {
    
    case ActionTypes.SET_QUESTIONS:
    case ActionTypes.UPDATE_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state
      };
    }
  
    case ActionTypes.SET_MY_QUESTIONS:
    case ActionTypes.UPDATE_MY_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedQuestions.entities),
        myEntitiesIds: _.union(state.ids, updatedQuestions.entitiesIds),
      };
    }
    
    case ActionTypes.CLEAR_MY_QUESTIONS:
      return {
        ...state,
        myEntitiesIds: []
      };
    
    case ActionTypes.CLEAR_QUESTIONS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
