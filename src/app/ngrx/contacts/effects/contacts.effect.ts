import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//actions
import * as contactsRequest from '../../contacts-request/actions/index';
import { UpdateFoundContactsAction } from '../actions/contacts.actions';

@Injectable()
export class ContactsEffects {
  
  constructor(private actions$: Actions) {
  }
  
  @Effect()
  contactFindByEmailSuccess$: Observable<Action> = this.actions$
  .ofType(contactsRequest.ActionTypes.FIND_BY_EMAIL_GET_REQUEST_SUCCESS)
  .map(toPayload)
  .map(payload => new UpdateFoundContactsAction(payload.data));

}
