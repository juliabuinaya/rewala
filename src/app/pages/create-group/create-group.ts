import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import * as _ from 'lodash';

import { ContactsService } from '../../core/services/contacts.service';

import { IAppState } from '../../ngrx/state/app.state';
//getters
import * as contactsStateGetter from '../../ngrx/contacts/states/contacts-getter.state';

@IonicPage({
  name: 'create-group'
})
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html'
})
export class CreateGroupPage {
  
  public contactsState$;
  public myContacts$;
  public foundContacts$;
  public searchString;
  public findContactEmail;
  public checkedFoundContacts = [];
  public checkedFoundContactsIds = [];
  
  constructor(public store: Store<IAppState>,
              public contactsService: ContactsService) {
  
    this.contactsState$ = this.store.select(contactsStateGetter.getContactsState);
    
    this.myContacts$ = this.store.select(contactsStateGetter.getContactsEntitiesState);
    this.myContacts$.subscribe(res => console.log(res));
  
    this.foundContacts$ = this.store.select(contactsStateGetter.getContactsFoundEntitiesState);
    this.foundContacts$.subscribe(res => console.log(res));
  }
  
  onFindSubmit(form) {
    if (form.valid) {
      this.findContactEmail = this.findContactEmail.trim().toLowerCase();
      this.contactsService.findContactByEmail(this.findContactEmail);
      form.reset();
    }
  }
  
  onAddContactSubmit(form) {
    if (form.valid) {
      console.log('Adding to my contacts', this.checkedFoundContactsIds);
      this.contactsService.removeFoundContactsIds(this.checkedFoundContactsIds);
      this.checkedFoundContacts = [];
      this.checkedFoundContactsIds = [];
    }
  }
  
  foundContactChange() {
    this.checkedFoundContactsIds = _.keys(_.pickBy(this.checkedFoundContacts));
  }
  
}
