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
  
  public contacts$;
  public searchString;
  public findContactEmail = '';
  
  constructor(public store: Store<IAppState>,
              public contactsService: ContactsService) {
  
    this.contacts$ = this.store.select(contactsStateGetter.getContactsEntitiesState);
    
  }
  
  onFindSubmit(form) {
    if (form.valid) {
      this.findContactEmail = this.findContactEmail.trim().toLowerCase();
      this.contactsService.findContactByEmail(this.findContactEmail);
      form.reset();
    }
  }
  
}
