import { IAppState } from '../../state/app.state';
import { createSelector } from 'reselect';

export const getSpinnerState = (state: IAppState) => state.spinner;

export const getSpinnerLoadingState = createSelector(getSpinnerState, state => {
  return state.loading;
});