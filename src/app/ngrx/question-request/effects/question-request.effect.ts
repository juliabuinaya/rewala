import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { RoutingService } from '../../../core/services/routing.service';

//actions
//import * as userRequest from '../actions/user-request.actions';
//import { UserGetSuccessAction, UserGetFailAction } from '../actions/index';
//import { SpinnerLoadingEndAction } from '../../spinner/actions/index';



@Injectable()
export class QuestionRequestEffects {
  
  constructor(private actions$: Actions,
              public routingService: RoutingService) {
  }
  
  //@Effect()
  //userGetRequest$: Observable<Action> = this.actions$
  //.ofType(userRequest.ActionTypes.GET_REQUEST)
  //.map(toPayload)
  //.switchMap((payload: any) => {
  //  return this.userService.getUserData(payload)
  //  .map((res: any) => new UserGetSuccessAction(res))
  //  .catch(error => Observable.of(new UserGetFailAction(error)));
  //});
  //
  //@Effect()
  //redirectToDashboardPage$: Observable<Action> = this.actions$
  //.ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  //.map((action: any) => {
  //  this.routingService.pushRootPage(DashboardPage);
  //  return new SpinnerLoadingEndAction();
  //});
  //
  //@Effect()
  //redirectToSignInPage$: Observable<Action> = this.actions$
  //.ofType(userRequest.ActionTypes.GET_REQUEST_FAIL)
  //.map((action: any) => {
  //  this.routingService.pushRootPage(SignInPage);
  //  return new SpinnerLoadingEndAction();
  //});
}
