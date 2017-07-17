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
        myEntitiesIds: _.union(state.myEntitiesIds, updatedQuestions.entitiesIds),
      };
    }
    
    case ActionTypes.CLEAR_MY_QUESTIONS:
      return {
        ...state,
        myEntitiesIds: []
      };
  
    case ActionTypes.SET_AWAITING_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedQuestions.entities),
        awaitingEntitiesIds: updatedQuestions.entitiesIds
      };
    }
  
    case ActionTypes.UPDATE_AWAITING_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedQuestions.entities),
        awaitingEntitiesIds: _.union(state.awaitingEntitiesIds, updatedQuestions.entitiesIds)
      };
    }
  
    case ActionTypes.CLEAR_AWAITING_QUESTIONS:
      return {
        ...state,
        awaitingEntitiesIds: []
      };
  
    case ActionTypes.SET_VOICE_GIVEN_QUESTIONS:
    case ActionTypes.UPDATE_VOICE_GIVEN_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedQuestions.entities),
        voiceGivenEntitiesIds: updatedQuestions.entitiesIds
      };
    }
  
    case ActionTypes.CLEAR_VOICE_GIVEN_QUESTIONS:
      return {
        ...state,
        voiceGivenEntitiesIds: []
      };
  
    case ActionTypes.SET_COMPLETED_QUESTIONS:
    case ActionTypes.UPDATE_COMPLETED_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedQuestions.entities),
        completedEntitiesIds: updatedQuestions.entitiesIds
      };
    }
  
    case ActionTypes.CLEAR_COMPLETED_QUESTIONS:
      return {
        ...state,
        completedEntitiesIds: []
      };
  
    case ActionTypes.SET_PAST_QUESTIONS:
    case ActionTypes.UPDATE_PAST_QUESTIONS: {
      let updatedQuestions = updateEntities(action.payload, QuestionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedQuestions.entities),
        pastEntitiesIds: updatedQuestions.entitiesIds
      };
    }
  
    case ActionTypes.CLEAR_PAST_QUESTIONS:
      return {
        ...state,
        pastEntitiesIds: []
      };
  
    case ActionTypes.DELETE_QUESTION: {
      let questionId = action.payload;
      return {
        ...state,
        ids: _.difference(state.ids, [questionId]),
        myEntitiesIds: _.difference(state.myEntitiesIds, [questionId]),
        awaitingEntitiesIds: _.difference(state.awaitingEntitiesIds, [questionId]),
        voiceGivenEntitiesIds: _.difference(state.voiceGivenEntitiesIds, [questionId]),
      };
    }
    
    case ActionTypes.CLEAR_QUESTIONS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
