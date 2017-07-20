import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../../core/services/user.service';
import { RoutingService } from '../../../core/services/routing.service';
import { SignInPage } from '../../../pages/auth/sign-in/sign-in';
import { SocketService } from '../../../core/services/socket.service';

//actions
import * as userRequest from '../actions/user-request.actions';
import { UserGetSuccessAction, UserGetFailAction } from '../actions/index';
import { SpinnerLoadingEndAction } from '../../spinner/actions/index';


@Injectable()
export class UserRequestEffects {
  
  constructor(private actions$: Actions,
              public userService: UserService,
              public routingService: RoutingService,
              public socketService: SocketService) {
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
  
  @Effect()
  redirectToSignInPage$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_FAIL)
  .map((action: any) => {
    this.routingService.pushRootPage(SignInPage);
    return new SpinnerLoadingEndAction();
  });
  
  @Effect({dispatch: false})
  socketCreateQuestion$: Observable<Action> = this.actions$
  .ofType(userRequest.ActionTypes.GET_REQUEST_SUCCESS)
  .do(() => {
    this.socketService.subscribeTo('create');
    this.socketService.subscribeTo('delete');
    this.socketService.subscribeTo('deadline');
  });
  
}
