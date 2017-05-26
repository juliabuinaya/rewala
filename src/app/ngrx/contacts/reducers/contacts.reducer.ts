import { IContactsState, initialState } from '../states/contacts.state';
import { Actions, ActionTypes } from '../actions/contacts.actions';

import * as _ from 'lodash';
import { ContactModel } from '../../../shared/models/contact.model';

function updateContacts(payload) {
  if(!_.isArray(payload)) {
    payload = [payload];
  }
  let contacts = payload;
  let contactsIds = contacts.map(contact => contact.id);
  let contactsEntities = contacts.reduce((entities: { [id: string]: any }, contact: any) => {
    return Object.assign(entities, {
      [contact.id]: new ContactModel(contact)
    });
  }, {});
  return {contactsIds, contactsEntities};
}

export function reducer(
  state = initialState,
  action: Actions
): IContactsState {
    
  switch (action.type) {
    
    case ActionTypes.SET_CONTACTS:
    case ActionTypes.UPDATE_CONTACTS: {
      let updatedContacts = updateContacts(action.payload);
      return {
        ...state,
        ids: _.union(state.ids, updatedContacts.contactsIds),
        entities: Object.assign({}, state.entities, updatedContacts.contactsEntities),
        myEntitiesIds: _.union(state.ids, updatedContacts.contactsIds)
      };
    }
  
    case ActionTypes.SET_FOUND_CONTACTS:
    case ActionTypes.UPDATE_FOUND_CONTACTS: {
      let updatedContacts = updateContacts(action.payload);
      return {
        ...state,
        ids: _.union(state.ids, updatedContacts.contactsIds),
        entities: Object.assign({}, state.entities, updatedContacts.contactsEntities),
        foundEntitiesIds: _.union(state.foundEntitiesIds, updatedContacts.contactsIds),
      };
    }
  
    case ActionTypes.REMOVE_FOUND_CONTACTS_IDS: {
      let foundEntitiesIds = _.difference(state.foundEntitiesIds, action.payload);
      return {
        ...state,
        foundEntitiesIds: foundEntitiesIds
      };
    }
  
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
