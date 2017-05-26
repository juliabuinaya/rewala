import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';

import { ContactsService } from '../../../core/services/contacts.service';
import { RoutingService } from '../../../core/services/routing.service';

import { CreateGroupCompletePage } from '../create-group-complete/create-group-complete';

import { IAppState } from '../../../ngrx/state/app.state';
//getters
import * as userStateGetter from '../../../ngrx/user/states/user-getter.state';
import * as contactsStateGetter from '../../../ngrx/contacts/states/contacts-getter.state';

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
  public search = new FormControl();
  public clientId;
  public contacts;
  public foundContacts$;
  public displayedContacts;
  public findContactEmail;
  public checkedContacts = [];
  public checkedContactsIds = [];
  
  constructor(public store: Store<IAppState>,
              private fb: FormBuilder,
              public contactsService: ContactsService,
              public routingService: RoutingService) {
  
    this.store.select(userStateGetter.getIdFromState)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(id => this.clientId = id);
    this.foundContacts$ = this.store.select(contactsStateGetter.getContactsFoundEntitiesState);
    this.store.select(contactsStateGetter.getContactsEntitiesState)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(contacts => {
      this.contacts = contacts;
      this.displayedContacts = this.contacts;
    });
  }
  
  ngOnInit() {
    this.findContactForm = this.fb.group({
      email: ['', Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]
    });
    
    this.search
    .valueChanges
    .takeUntil(this.ngUnsubscribe)
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(search => {
      let searchQuery = search.trim().toLowerCase();
      this.displayedContacts = this.contacts.filter(contact => {
        let searchValue = contact.username.trim().toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      });
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
  
  contactChange() {
    this.checkedContactsIds = _.keys(_.pickBy(this.checkedContacts));
  }
  
  toCreateGroupCompletePage() {
    let groupData = {
      memberIds: this.checkedContactsIds,
      clientId: this.clientId
    };
    this.routingService.pushPage(CreateGroupCompletePage, {groupData});
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
