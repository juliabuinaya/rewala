import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from '../../../core/services/contacts.service';

//actions
import * as userRequest from '../../user-request/actions/user-request.actions';
import * as contactsRequest from '../actions/contacts-request.actions';
import { ContactsFindByEmailSuccessAction,
         ContactsFindByEmailFailAction } from '../actions/index';
import { ContactsGetAction, ContactsGetSuccessAction, ContactsGetFailAction } from '../actions/contacts-request.actions';


@Injectable()
export class ContactsRequestEffects {
  
  constructor(private actions$: Actions, public contactsService: ContactsService) {
  }
  
  @Effect()
  getContacts$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .map((action: any) => new ContactsGetAction());
  
  @Effect()
  contactsFindByEmailGetRequest$: Observable<Action> = this.actions$
  .ofType(contactsRequest.ActionTypes.FIND_BY_EMAIL_GET_REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.contactsService.findContactByEmailRequest(payload)
    .map((res: any) => new ContactsFindByEmailSuccessAction(res))
    .catch(error => Observable.of(new ContactsFindByEmailFailAction(error)));
  });
  
  @Effect()
  contactsGetRequest$: Observable<Action> = this.actions$
  .ofType(contactsRequest.ActionTypes.GET_REQUEST)
  .switchMap((payload: any) => {
    return this.contactsService.getContactsRequest()
    .map((res: any) => new ContactsGetSuccessAction(res))
    .catch(error => Observable.of(new ContactsGetFailAction(error)));
  });
}
