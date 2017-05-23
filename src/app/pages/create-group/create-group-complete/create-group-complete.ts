import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ContactsService } from '../../../core/services/contacts.service';

@IonicPage({
  name: 'create-group-complete'
})
@Component({
  selector: 'page-create-group-complete',
  templateUrl: 'create-group-complete.html'
})
export class CreateGroupCompletePage {
  
  public findContactForm: FormGroup;
  public contactsState$;
  public myContacts$;
  public foundContacts$;
  public searchString;
  public findContactEmail;
  public checkedFoundContacts = [];
  public checkedFoundContactsIds = [];
  
  constructor(private fb: FormBuilder,
              public contactsService: ContactsService) {
    
  }
  
  ngOnInit() {
  }
  
  createGroup() {
    console.log('qweqwe');
    let data = {
      name: 'qqq',
      memberIds: [],
      clientId: '1111qqq'
    };
  }
  
  ngOnDestroy() {
  }
}
