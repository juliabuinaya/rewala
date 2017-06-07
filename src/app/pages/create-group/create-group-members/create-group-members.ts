import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicPage, ToastController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { UserService } from '../../../core/services/user.service';
import { ContactsService } from '../../../core/services/contacts.service';
import { RoutingService } from '../../../core/services/routing.service';

import { CreateGroupCompletePage } from '../create-group-complete/create-group-complete';


@IonicPage({
  name: 'create-group-members'
})
@Component({
  selector: 'page-create-group-members',
  templateUrl: 'create-group-members.html'
})
export class CreateGroupMembersPage {
  
  public findContactForm: FormGroup;
  public search = new FormControl();
  public userId$;
  public userEmail$;
  public search$;
  public contacts$;
  public foundContacts$;
  public foundContactsSubscriber;
  public displayedContacts$;
  public clientId;
  public userIdSubscriber;
  public clientEmail;
  public userEmailSubscriber;
  public findContactEmail;
  public checkedContacts = [];
  public checkedContactsIds = [];
  public questionSettings;
  
  constructor(private fb: FormBuilder,
              public userService: UserService,
              public contactsService: ContactsService,
              public routingService: RoutingService,
              public toastController: ToastController,
              public navParams: NavParams) {
  
    this.questionSettings = navParams.get('questionSettings');
   
  }
  
  ngOnInit() {
    
    this.userId$ = this.userService.userId$;
    this.userEmail$ = this.userService.userEmail$;
  
    this.userIdSubscriber = this.userId$
    .subscribe(id => this.clientId = id);
    this.userEmailSubscriber = this.userEmail$
    .subscribe(email => this.clientEmail = email);
    this.foundContacts$ = this.contactsService.foundContacts$;
    
    this.findContactForm = this.fb.group({
      email: ['', Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]
    });
    
    this.search$ = this.search
    .valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .map(search => search.trim().toLowerCase())
    .startWith('');
    
    this.contacts$ = this.contactsService.contacts$;
  
    this.displayedContacts$ = Observable.combineLatest(this.contacts$, this.search$)
    .map(([contacts, search]) => {
      return (<any>contacts).filter(contact => {
        return contact.username.trim().toLowerCase().indexOf(search) !== -1;
      });
    });
  }
  
  ngAfterViewInit() {
    this.foundContactsSubscriber = this.foundContacts$
    .subscribe(() => this.findContactForm.reset());
  }
  
  onFindSubmit() {
    if (this.findContactForm.valid) {
      this.findContactEmail = this.findContactEmail.trim().toLowerCase();
      if (this.findContactEmail !== this.clientEmail) {
        this.contactsService.findContactByEmail(this.findContactEmail);
      }
      else {
        let toast = this.toastController.create({
          message: 'Email is yours',
          duration: 4000,
          position: 'bottom',
          cssClass: 'toast-error'
        });
        toast.present();
      }
    }
  }
  
  contactChange() {
    this.checkedContactsIds = _.keys(_.pickBy(this.checkedContacts));
  }
  
  toCreateGroupCompletePage() {
    this.contactsService.setSelectedContacts(this.checkedContactsIds);
    let groupData = {
      memberIds: this.checkedContactsIds,
      clientId: this.clientId
    };
    this.routingService.pushPage(CreateGroupCompletePage, {groupData});
  }
  
  ngOnDestroy() {
    this.foundContactsSubscriber.unsubscribe();
    this.userIdSubscriber.unsubscribe();
    this.userEmailSubscriber.unsubscribe();
  }
}
