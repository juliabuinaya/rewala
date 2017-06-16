//lib
import { compose } from '@ngrx/core/compose';

//interfaces
import { IOptionsPostState } from './options-post.state';
import { IOptionsRequestState } from '../../../states/options-request.state';

// states
import { getOptionsRequestState } from '../../../states/options-request-getter.state';



export const getOptionsPostState = compose((state: IOptionsRequestState) => {
  return <IOptionsPostState>state.optionsPostState;
}, getOptionsRequestState);
