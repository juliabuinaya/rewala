import { Action } from '@ngrx/store';
import { type } from '../../util';

import { CONTACTS } from '../common/index';

export const ActionTypes = {
  SET_MY_CONTACTS: type(`[${CONTACTS}] Set My Contacts`),
  CLEAR_MY_CONTACTS: type(`[${CONTACTS}] Clear My Contacts`),
  UPDATE_MY_CONTACTS: type(`[${CONTACTS}] Update My Contacts`),
  SET_FOUND_CONTACTS: type(`[${CONTACTS}] Set Found Contacts`),
  CLEAR_FOUND_CONTACTS: type(`[${CONTACTS}] Clear Found Contacts`),
  UPDATE_FOUND_CONTACTS: type(`[${CONTACTS}] Update Found Contacts`),
  REMOVE_FOUND_CONTACTS_IDS: type(`[${CONTACTS}] Remove Found Contacts Ids`),
};

export class SetMyContactsAction implements Action {
  type = ActionTypes.SET_MY_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class ClearMyContactsAction implements Action {
  type = ActionTypes.CLEAR_MY_CONTACTS;
  
  constructor(public payload?: any) {
  }
}

export class UpdateMyContactsAction implements Action {
  type = ActionTypes.UPDATE_MY_CONTACTS;

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
  = SetMyContactsAction | ClearMyContactsAction | UpdateMyContactsAction | RemoveFoundContactsIdsAction;
