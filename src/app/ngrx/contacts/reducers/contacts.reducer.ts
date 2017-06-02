import * as _ from 'lodash';

import { IContactsState, initialState } from '../states/contacts.state';
import { Actions, ActionTypes } from '../actions/contacts.actions';
import { updateEntities } from '../../util';
import { ContactModel } from '../../../shared/models/contact.model';

export function reducer(
  state = initialState,
  action: Actions
): IContactsState {
    
  switch (action.type) {
    
    case ActionTypes.SET_CONTACTS:
    case ActionTypes.UPDATE_CONTACTS: {
      let updatedContacts = updateEntities(action.payload, ContactModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedContacts.entitiesIds),
        entities: Object.assign({}, state.entities, updatedContacts.entities),
        myEntitiesIds: _.union(state.ids, updatedContacts.entitiesIds)
      };
    }
  
    case ActionTypes.SET_FOUND_CONTACTS:
    case ActionTypes.UPDATE_FOUND_CONTACTS: {
      let updatedContacts = updateEntities(action.payload, ContactModel);
      return {
        ...state,
        ids: _.union(state.ids, updatedContacts.entitiesIds),
        entities: Object.assign({}, state.entities, updatedContacts.entities),
        foundEntitiesIds: _.union(state.foundEntitiesIds, updatedContacts.entitiesIds),
      };
    }
  
    case ActionTypes.REMOVE_FOUND_CONTACTS_IDS: {
      let foundEntitiesIds = _.difference(state.foundEntitiesIds, action.payload);
      return {
        ...state,
        foundEntitiesIds: foundEntitiesIds
      };
    }
  
    case ActionTypes.SET_SELECTED_CONTACTS:
      return {
        ...state,
        selectedEntitiesIds: action.payload
      };
  
    case ActionTypes.CLEAR_SELECTED_CONTACTS:
      return {
        ...state,
        selectedEntitiesIds: []
      };
  
    case ActionTypes.CLEAR_FOUND_CONTACTS:
      return {
        ...state,
        foundEntitiesIds: []
      };
    
    case ActionTypes.CLEAR_CONTACTS:
      return Object.assign({}, state, initialState);
    
    default: {
      return state;
    }
  }
}
