import { Action } from '@ngrx/store';
import { type } from '../../util';

import { CONTACTS_REQUEST } from '../common/index';

export const ActionTypes = {
  GET_REQUEST: type(`[${CONTACTS_REQUEST}] Get Request`),
  GET_REQUEST_SUCCESS: type(`[${CONTACTS_REQUEST}] Get Request Success`),
  GET_REQUEST_FAIL: type(`[${CONTACTS_REQUEST}] Get Request Fail`),
  FIND_BY_EMAIL_GET_REQUEST: type(`[${CONTACTS_REQUEST}] Find By Email Get Request`),
  FIND_BY_EMAIL_GET_REQUEST_SUCCESS: type(`[${CONTACTS_REQUEST}] Find By Email Get Request Success`),
  FIND_BY_EMAIL_GET_REQUEST_FAIL: type(`[${CONTACTS_REQUEST}] Find By Email Get Request Fail`),
};

export class ContactsGetAction implements Action {
  type = ActionTypes.GET_REQUEST;

  constructor(public payload?: any) {
  }
}

export class ContactsGetSuccessAction implements Action {
  type = ActionTypes.GET_REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class ContactsGetFailAction implements Action {
  type = ActionTypes.GET_REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}

export class ContactsFindByEmailAction implements Action {
  type = ActionTypes.FIND_BY_EMAIL_GET_REQUEST;
  
  constructor(public payload?: any) {
  }
}

export class ContactsFindByEmailSuccessAction implements Action {
  type = ActionTypes.FIND_BY_EMAIL_GET_REQUEST_SUCCESS;
  
  constructor(public payload?: any) {
  }
}

export class ContactsFindByEmailFailAction implements Action {
  type = ActionTypes.FIND_BY_EMAIL_GET_REQUEST_FAIL;
  
  constructor(public payload?: any) {
  }
}

export type Actions
  = ContactsGetAction | ContactsGetSuccessAction | ContactsGetFailAction |
    ContactsFindByEmailAction | ContactsFindByEmailSuccessAction | ContactsFindByEmailFailAction;
