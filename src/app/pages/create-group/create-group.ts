import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';

//getters
import * as groupsStateGetter from '../../ngrx/groups/states/groups-getter.state';
import { ContactsService } from '../../core/services/contacts.service';

@IonicPage({
  name: 'create-group'
})
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html'
})
export class CreateGroupPage {
  
  public searchString;
  public findContactEmail = '';
  
  constructor(public store: Store<IAppState>,
              public contactsService: ContactsService) {
  }
  
  onFindSubmit(form) {
    if (form.valid) {
      this.findContactEmail = this.findContactEmail.trim().toLowerCase();
      this.contactsService.findContactByEmail(this.findContactEmail);
      form.reset();
    }
  }
  
}
