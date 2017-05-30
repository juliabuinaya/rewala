import { IQuestionsState, initialState } from '../states/questions.state';
import { Actions, ActionTypes } from '../actions/questions.actions';

import { QuestionModel } from '../../../shared/models/question.model';
import * as _ from 'lodash';

function updateQuestions(payload) {
  if(!_.isArray(payload)) {
    payload = [payload];
  }
  let questions = payload;
  let questionsIds = questions.map(question => question.id);
  let questionsEntities = questions.reduce((entities: { [id: string]: any }, question: any) => {
    return Object.assign(entities, {
      [question.id]: new QuestionModel(question)
    });
  }, {});
  return {questionsIds, questionsEntities};
}

export function reducer(
  state = initialState,
  action: Actions
): IQuestionsState {
    
  switch (action.type) {
    
    case ActionTypes.SET_QUESTIONS:
    case ActionTypes.UPDATE_QUESTIONS: {
      let updatedQuestions = updateQuestions(action.payload);
      return {
        ...state,
        //ids: _.union(state.ids, updatedQuestions.questionsIds),
        //entities: Object.assign({}, state.entities, updatedQuestions.questionsEntities),
        //myEntitiesIds: _.union(state.ids, updatedQuestions.questionsIds)
      };
    }
  
    case ActionTypes.SET_MY_QUESTIONS:
    case ActionTypes.UPDATE_MY_QUESTIONS: {
      let updatedQuestions = updateQuestions(action.payload);
      return {
        ...state,
        ids: _.union(state.ids, updatedQuestions.questionsIds),
        entities: Object.assign({}, state.entities, updatedQuestions.questionsEntities),
        myEntitiesIds: _.union(state.ids, updatedQuestions.questionsIds),
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
