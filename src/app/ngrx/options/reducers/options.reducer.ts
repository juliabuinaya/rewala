import * as _ from 'lodash';

import { IOptionsState, initialState } from '../states/options.state';
import { Actions, ActionTypes } from '../actions/options.actions';
import { updateEntities } from '../../util';
import { OptionModel } from '../../../shared/models/option.model';

export function reducer(
  state = initialState,
  action: Actions
): IOptionsState {
    
  switch (action.type) {
    
    case ActionTypes.SET_OPTIONS:
    case ActionTypes.UPDATE_OPTIONS: {
      let updatedOptions = updateEntities(action.payload, OptionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedOptions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedOptions.entities),
        currentEntitiesIds: _.union(state.ids, updatedOptions.entitiesIds)
      };
    }
  
    case ActionTypes.SET_CURRENT_OPTIONS:
    case ActionTypes.UPDATE_CURRENT_OPTIONS: {
      let updatedOptions = updateEntities(action.payload, OptionModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedOptions.entitiesIds),
        entities: Object.assign({}, state.entities, updatedOptions.entities),
        currentEntitiesIds: updatedOptions.entitiesIds,
      };
    }
    
    case ActionTypes.CLEAR_CURRENT_OPTIONS:
      return {
        ...state,
        currentEntitiesIds: []
      };
    
    case ActionTypes.CLEAR_OPTIONS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
