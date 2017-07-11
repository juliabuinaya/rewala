import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getResultsRequestState = (state: IAppState) => state.resultsRequest;

export const getResultsGetLoadedState = createSelector(getResultsRequestState, state => {
  return state.loaded;
});