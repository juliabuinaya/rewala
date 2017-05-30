import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';
import * as contactsRequest from '../../ngrx/contacts-request/actions/index';
import * as contacts from '../../ngrx/contacts/actions/index';

@Injectable()
export class ContactsService {
  
  constructor(public restangular: Restangular,
              public store: Store<IAppState>) {
  }
  
  getContacts() {
    this.store.dispatch(new contactsRequest.ContactsGetAction());
  }
  
  getContactsRequest() {
    return this.restangular.all('clients').one('get-contacts').get();
  }
  
  findContactByEmail(data) {
    this.store.dispatch(new contactsRequest.ContactsFindByEmailAction(data));
  }
  
  findContactByEmailRequest(payload: any) {
    return this.restangular.all('clients').one('find-by-email').get({email: payload});
  }
  
  removeFoundContactsIds(data) {
    this.store.dispatch(new contacts.RemoveFoundContactsIdsAction(data));
  }
  
  clearFoundContacts() {
    this.store.dispatch(new contacts.ClearFoundContactsAction());
  }
  
  setSelectedContacts(data) {
    this.store.dispatch(new contacts.SetSelectedContactsAction(data));
  }
  
  clearSelectedContacts() {
    this.store.dispatch(new contacts.ClearSelectedContactsAction());
  }
  
}