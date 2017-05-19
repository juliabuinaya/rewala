import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from '../../../core/services/contacts.service';

//actions
import * as contactsRequest from '../actions/contacts-request.actions';
import { ContactsFindByEmailSuccessAction,
         ContactsFindByEmailFailAction } from '../actions/index';

@Injectable()
export class ContactsRequestEffects {
  
  constructor(private actions$: Actions, public contactsService: ContactsService) {
  }
  
  @Effect()
  contactsFindByEmailGetRequest$: Observable<Action> = this.actions$
  .ofType(contactsRequest.ActionTypes.FIND_BY_EMAIL_GET_REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.contactsService.findContactByEmailRequest(payload)
    .map((res: any) => new ContactsFindByEmailSuccessAction(res))
    .catch(error => Observable.of(new ContactsFindByEmailFailAction(error)));
  });
  
  //@Effect()
  //ContactsGetRequest$: Observable<Action> = this.actions$
  //.ofType(ContactsRequest.ActionTypes.GET_REQUEST)
  //.map(toPayload)
  //.switchMap((payload: any) => {
  //  return this.ContactsService.getContactsData(payload)
  //  .map((res: any) => new ContactsGetSuccessAction(res))
  //  .catch(error => Observable.of(new ContactsGetFailAction(error)));
  //});
  //
  //@Effect()
  //redirectToDashboardPage$: Observable<Action> = this.actions$
  //.ofType(ContactsRequest.ActionTypes.GET_REQUEST_SUCCESS)
  //.map((action: any) => {
  //  this.routingService.pushRootPage(DashboardPage);
  //  return new SpinnerLoadingEndAction();
  //});
  //
  //@Effect()
  //getContactsGroups$: Observable<Action> = this.actions$
  //.ofType(ContactsRequest.ActionTypes.GET_REQUEST_SUCCESS)
  //.map((action: any) => new GroupsGetAction(action.payload));
  //
  //@Effect()
  //redirectToSignInPage$: Observable<Action> = this.actions$
  //.ofType(ContactsRequest.ActionTypes.GET_REQUEST_FAIL)
  //.map((action: any) => {
  //  this.routingService.pushRootPage(SignInPage);
  //  return new SpinnerLoadingEndAction();
  //});
  //
}
