import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as userRequest from '../actions/user-request.actions';
import { UserGetSuccessAction, UserGetFailAction } from '../actions/index';

import { UserService } from '../../../core/services/user.service';
import { DashboardPage } from '../../../pages/dashboard/dashboard';
import { RoutingService } from '../../../core/services/routing.service';
import { SignInPage } from '../../../pages/auth/sign-in/sign-in';


@Injectable()
export class UserRequestEffects {
  
  constructor(private actions$: Actions,
              public userService: UserService,
              public routingService: RoutingService) {
  }
  
  @Effect()
  userGetRequest$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.userService.getUserData(payload)
    .map((res: any) => new UserGetSuccessAction(res))
    .catch(error => Observable.of(new UserGetFailAction(error)));
  });
  
  @Effect({dispatch: false})
  redirectToDashboardPage$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .do(() => this.routingService.pushRootPage(DashboardPage));
  
  @Effect({dispatch: false})
  redirectToSignInPage$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_FAIL)
  .do(() => this.routingService.pushRootPage(SignInPage));
}
