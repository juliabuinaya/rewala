import { Action } from '@ngrx/store';
import { type } from '../../util';

import { CONTACTS } from '../common/index';

export const ActionTypes = {
  SET_CONTACTS: type(`[${CONTACTS}] Set Contacts`),
  CLEAR_CONTACTS: type(`[${CONTACTS}] Clear Contacts`),
  UPDATE_CONTACTS: type(`[${CONTACTS}] Update Contacts`),
  SET_SELECTED_CONTACTS: type(`[${CONTACTS}] Set Selected Contacts`),
  CLEAR_SELECTED_CONTACTS: type(`[${CONTACTS}] Clear Selected Contacts`),
  SET_FOUND_CONTACTS: type(`[${CONTACTS}] Set Found Contacts`),
  CLEAR_FOUND_CONTACTS: type(`[${CONTACTS}] Clear Found Contacts`),
  UPDATE_FOUND_CONTACTS: type(`[${CONTACTS}] Update Found Contacts`),
  REMOVE_FOUND_CONTACTS_IDS: type(`[${CONTACTS}] Remove Found Contacts Ids`),
};

export class SetContactsAction implements Action {
  type = ActionTypes.SET_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class ClearContactsAction implements Action {
  type = ActionTypes.CLEAR_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateContactsAction implements Action {
  type = ActionTypes.UPDATE_CONTACTS;

  constructor(public payload?: any) {
  }
}

export class SetSelectedContactsAction implements Action {
  type = ActionTypes.SET_SELECTED_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class ClearSelectedContactsAction implements Action {
  type = ActionTypes.CLEAR_SELECTED_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class SetFoundContactsAction implements Action {
  type = ActionTypes.SET_FOUND_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class ClearFoundContactsAction implements Action {
  type = ActionTypes.CLEAR_FOUND_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateFoundContactsAction implements Action {
  type = ActionTypes.UPDATE_FOUND_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class RemoveFoundContactsIdsAction implements Action {
  type = ActionTypes.REMOVE_FOUND_CONTACTS_IDS;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = SetContactsAction | ClearContactsAction | UpdateContactsAction |
  RemoveFoundContactsIdsAction | SetFoundContactsAction | ClearFoundContactsAction | UpdateFoundContactsAction |
  RemoveFoundContactsIdsAction | SetSelectedContactsAction | ClearSelectedContactsAction;
