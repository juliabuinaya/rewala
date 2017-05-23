import { IOptionsGetState, IOptionsPostState } from './index';

export interface IOptionsRequestState {
  optionsGetState?: IOptionsGetState;
  optionsPostState?: IOptionsPostState;
}

export const optionsRequestInitialState: IOptionsRequestState = {};
