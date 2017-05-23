import { IAppState } from '../../state/app.state';

export const getOptionsRequestState = (state: IAppState) => state.optionsRequest;

export * from '../nested-states/options-get/states/options-get-getter.state';
export * from '../nested-states/options-post/states/options-post-getter.state';
