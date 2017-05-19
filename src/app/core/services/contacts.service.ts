import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';
import * as contactsRequest from '../../ngrx/contacts-request/actions/index';

@Injectable()
export class ContactsService {
  
  constructor(public restangular: Restangular,
              public store: Store<IAppState>) {
  }
  
  getContactsData(token) {
  }
  
  findContactByEmail(data) {
    this.store.dispatch(new contactsRequest.ContactsFindByEmailAction(data));
  }
  
  findContactByEmailRequest(payload: any) {
    return this.restangular.all('clients').one('find-by-email').get({email: payload});
  }
  
}