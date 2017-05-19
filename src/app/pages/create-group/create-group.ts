import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

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
  public findContactEmail = '';
  
  constructor(public store: Store<IAppState>,
              public contactsService: ContactsService) {
  
    this.contactsState$ = this.store.select(contactsStateGetter.getContactsState);
    this.contactsState$
    .subscribe(state => console.log(state));
    
    this.myContacts$ = this.store.select(contactsStateGetter.getContactsEntitiesState);
    this.myContacts$
    .subscribe(contacts => console.log(contacts));
  
    this.foundContacts$ = this.store.select(contactsStateGetter.getContactsFoundEntitiesState);
    this.foundContacts$
    .subscribe(ids => console.log(ids));
  }
  
  onFindSubmit(form) {
    if (form.valid) {
      this.findContactEmail = this.findContactEmail.trim().toLowerCase();
      this.contactsService.findContactByEmail(this.findContactEmail);
      form.reset();
    }
  }
  
}
