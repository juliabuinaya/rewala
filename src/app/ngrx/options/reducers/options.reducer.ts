import { IOptionsState, initialState } from '../states/options.state';
import { Actions, ActionTypes } from '../actions/options.actions';

import * as _ from 'lodash';
import { OptionModel } from '../../../shared/models/option.model';

function updateOptions(payload) {
  if(!_.isArray(payload)) {
    payload = [payload];
  }
  let options = payload;
  let optionsIds = options.map(option => option.id);
  let optionsEntities = options.reduce((entities: { [id: string]: any }, option: any) => {
    return Object.assign(entities, {
      [option.id]: new OptionModel(option)
    });
  }, {});
  return {optionsIds, optionsEntities};
}

export function reducer(
  state = initialState,
  action: Actions
): IOptionsState {
    
  switch (action.type) {
    
    case ActionTypes.SET_OPTIONS:
    case ActionTypes.UPDATE_OPTIONS: {
      let updatedOptions = updateOptions(action.payload);
      return {
        ...state,
        ids: _.union(state.ids, updatedOptions.optionsIds),
        entities: Object.assign({}, state.entities, updatedOptions.optionsEntities),
        currentEntitiesIds: _.union(state.ids, updatedOptions.optionsIds)
      };
    }
  
    case ActionTypes.SET_CURRENT_OPTIONS:
    case ActionTypes.UPDATE_CURRENT_OPTIONS: {
      let updatedOptions = updateOptions(action.payload);
      return {
        ...state,
        ids: _.union(state.ids, updatedOptions.optionsIds),
        entities: Object.assign({}, state.entities, updatedOptions.optionsEntities),
        currentEntitiesIds: updatedOptions.optionsIds,
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
