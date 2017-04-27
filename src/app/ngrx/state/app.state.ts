// libs
import { ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
// import { environment } from '../../../environments/environment';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */


/** with nested states */
 import * as fromAuthRequestState from '../auth-request/states';
 import * as fromAuthRequestReducers from '../auth-request/reducers';
 
 import * as fromGroupsRequestState from '../groups-request/states';
 import * as fromGroupsRequestReducers from '../groups-request/reducers';

 
 import * as fromAuth from '../auth/index';
 import * as fromUser from '../user/index';
 import * as fromUserRequest from '../user-request/index';
 import * as fromSpinner from '../spinner/index';
 import * as fromGroups from '../groups/index';
 
 
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */

export interface IAppState {
  auth: fromAuth.IAuthState;
  authRequest: fromAuthRequestState.IAuthRequestState;
  user: fromUser.IUserState;
  userRequest: fromUserRequest.IUserRequestState;
  spinner: fromSpinner.ISpinnerState;
  groups: fromGroups.IGroupsState;
  groupsRequest: fromGroupsRequestState.IGroupsRequestState;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */

const reducers = {
  auth: fromAuth.reducer,
  authRequest: fromAuthRequestReducers.authRequestReducer,
  user: fromUser.reducer,
  userRequest: fromUserRequest.reducer,
  spinner: fromSpinner.reducer,
  groups: fromGroups.reducer,
  groupsRequest: fromGroupsRequestReducers.groupsRequestReducer
};

const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);
// const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
  // if (environment.production) {
  //   return productionReducer(state, action);
  // } else {
  //   return developmentReducer(state, action);
  // }
  return developmentReducer(state, action);
}

export const init: any = compose((state: IAppState) => state);
