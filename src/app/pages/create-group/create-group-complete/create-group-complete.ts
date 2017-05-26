import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { GroupsService } from '../../../core/services/groups.service';

import { IAppState } from '../../../ngrx/state/app.state';
import * as contactsStateGetter from '../../../ngrx/contacts/states/contacts-getter.state';


@IonicPage({
  name: 'create-group-complete'
})
@Component({
  selector: 'page-create-group-complete',
  templateUrl: 'create-group-complete.html'
})
export class CreateGroupCompletePage {
  
  public createGroupForm: FormGroup;
  public groupData;
  public groupName = null;
  public selectedContacts$;
  
  constructor(public store: Store<IAppState>,
              private fb: FormBuilder,
              public navParams: NavParams,
              public groupsService: GroupsService) {
    
    this.groupData = navParams.get('groupData');
    this.selectedContacts$ = this.store.select(contactsStateGetter.getContactsSelectedEntitiesState);
  }
  
  ngOnInit() {
    this.createGroupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]]
    });
  }
  
  createGroup(form) {
    if(form.valid && this.groupName) {
      this.groupData.name = this.groupName;
      this.groupsService.createGroup(this.groupData);
    }
  }
  
  ngOnDestroy() {
  }
}
