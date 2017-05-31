import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as contactsRequest from '../../ngrx/contacts-request/actions/index';
import * as contacts from '../../ngrx/contacts/actions/index';
//getters
import * as contactsStateGetter from '../../ngrx/contacts/states/contacts-getter.state';


@Injectable()
export class ContactsService {
  
  public contacts$: Observable<any>;
  public foundContacts$: Observable<any>;
  public selectedContacts$: Observable<any>;
  
  constructor(public restangular: Restangular,
              public store: Store<IAppState>) {
    
    this.contacts$ = this.store.select(contactsStateGetter.getContactsEntitiesState);
    this.foundContacts$ = this.store.select(contactsStateGetter.getContactsFoundEntitiesState);
    this.selectedContacts$ = this.store.select(contactsStateGetter.getContactsSelectedEntitiesState);
    
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