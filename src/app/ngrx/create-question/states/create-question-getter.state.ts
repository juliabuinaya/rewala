import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getCreateQuestionState = (state: IAppState) => state.createQuestion;



