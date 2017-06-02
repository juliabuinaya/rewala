import { IAnswersState, initialState } from '../states/answers.state';
import { Actions, ActionTypes } from '../actions/answers.actions';

import * as _ from 'lodash';
//import { AnswerModel } from '../../../shared/models/answer.model';

function updateAnswers(payload) {
  if(!_.isArray(payload)) {
    payload = [payload];
  }
  let answers = payload;
  let answersIds = answers.map(answer => answer.id);
  let answersEntities = answers.reduce((entities: { [id: string]: any }, answer: any) => {
    return Object.assign(entities, {
      [answer.id]: answer
    });
  }, {});
  return {answersIds, answersEntities};
}

export function reducer(
  state = initialState,
  action: Actions
): IAnswersState {
  
  switch (action.type) {
    
    case ActionTypes.SET_ANSWERS:
    case ActionTypes.UPDATE_ANSWERS: {
      let updatedAnswers = updateAnswers(action.payload);
      return {
        ...state,
        ids: _.union(state.ids, updatedAnswers.answersIds),
        entities: Object.assign({}, state.entities, updatedAnswers.answersEntities),
      };
    }
      
    case ActionTypes.CLEAR_ANSWERS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
