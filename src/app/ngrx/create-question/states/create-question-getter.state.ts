import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getCreateQuestionState = (state: IAppState) => state.createQuestion;

export const getTextFromState = createSelector(getCreateQuestionState, state => state.text);
export const getAnswerTypeFromState = createSelector(getCreateQuestionState, state => state.answerType);
export const getOptionsQuantityFromState = createSelector(getCreateQuestionState, state => state.optionsQuantity);

