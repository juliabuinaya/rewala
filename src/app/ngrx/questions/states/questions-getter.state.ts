import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

import * as _ from 'lodash';

export const getQuestionsState = (state: IAppState) => state.questions;

export const getQuestionsEntitiesState = createSelector(getQuestionsState, state => {
  return _.map(state.entities, (question: any) => question);
});

export const getQuestionsMyEntitiesState = createSelector(getQuestionsState, state => {
  return state.myEntitiesIds.map(key => {
    return state.entities[key];
  });
});

export const getQuestionsAwaitingEntitiesState = createSelector(getQuestionsState, state => {
  return state.awaitingEntitiesIds.map(key => {
    return state.entities[key];
  });
});

export const getQuestionsVoiceGivenEntitiesState = createSelector(getQuestionsState, state => {
  return state.voiceGivenEntitiesIds.map(key => {
    return state.entities[key];
  });
});

export const getQuestionsCompletedEntitiesState = createSelector(getQuestionsState, state => {
  return state.completedEntitiesIds.map(key => {
    return state.entities[key];
  });
});

export const getQuestionsPastEntitiesState = createSelector(getQuestionsState, state => {
  return state.pastEntitiesIds.map(key => {
    return state.entities[key];
  });
});