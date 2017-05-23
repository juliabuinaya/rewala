import { optionsRequestInitialState, IOptionsRequestState  } from '../states/options-request.state';

import {
  optionsGetReducer,
  optionsPostReducer
} from './index';


export function optionsRequestReducer(
  state = optionsRequestInitialState,
  action
): IOptionsRequestState {
  return {
    optionsGetState: optionsGetReducer(state.optionsGetState, action),
    optionsPostState: optionsPostReducer(state.optionsPostState, action)
  };
}
