import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { Subject } from 'rxjs';
import * as _ from 'lodash';

import { ContactsService } from '../../../core/services/contacts.service';
import { RoutingService } from '../../../core/services/routing.service';

import { IAppState } from '../../../ngrx/state/app.state';
//getters
import * as contactsStateGetter from '../../../ngrx/contacts/states/contacts-getter.state';
import { CreateGroupCompletePage } from '../create-group-complete/create-group-complete';

@IonicPage({
  name: 'create-group-members'
})
@Component({
  selector: 'page-create-group-members',
  templateUrl: 'create-group-members.html'
})
export class CreateGroupMembersPage {
  
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public findContactForm: FormGroup;
  public contactsState$;
  public myContacts$;
  public foundContacts$;
  public searchString;
  public findContactEmail;
  public checkedFoundContacts = [];
  public checkedFoundContactsIds = [];
  
  constructor(public store: Store<IAppState>,
              private fb: FormBuilder,
              public contactsService: ContactsService,
              public routingService: RoutingService) {
  
    this.contactsState$ = this.store.select(contactsStateGetter.getContactsState);
    this.myContacts$ = this.store.select(contactsStateGetter.getContactsEntitiesState);
    this.foundContacts$ = this.store.select(contactsStateGetter.getContactsFoundEntitiesState);
  }
  
  ngOnInit() {
    this.findContactForm = this.fb.group({
      email: ['', Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]
    });
  }
  
  ngAfterViewInit() {
    this.foundContacts$
    .takeUntil(this.ngUnsubscribe)
    .subscribe(() => this.findContactForm.reset());
  }
  
  onFindSubmit() {
    if (this.findContactForm.valid) {
      this.findContactEmail = this.findContactEmail.trim().toLowerCase();
      this.contactsService.findContactByEmail(this.findContactEmail);
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
  
  toCreateGroup() {
    let data = {};
    this.routingService.pushPage(CreateGroupCompletePage, {data});
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
