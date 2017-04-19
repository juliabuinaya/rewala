import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { RoutingService } from '../../../../../core/services/routing.service';
import { AuthService } from '../../../../../core/services/index';
import { Observable } from 'rxjs';

//actions
import * as sessionPost from '../actions/session-post.actions';
import * as registrationPost from '../../registration-post/actions/registration-post.actions';
import { SessionPostAction, SessionPostSuccessAction, SessionPostFailAction } from '../actions/index';

//pages
import { DashboardPage } from '../../../../../pages/dashboard/dashboard';


@Injectable()
export class SessionPostEffects {
  
  constructor(public actions$: Actions,
              public authService: AuthService,
              public routingService: RoutingService) {
  }

  @Effect()
  sessionPost$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST,
      registrationPost.ActionTypes.REQUEST_SUCCESS)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.authService.signInRequest(payload)
    .map((res: any) => new SessionPostSuccessAction(res))
    .catch(error => Observable.of(new SessionPostFailAction(error)));
  });
  
  @Effect({dispatch: false})
  redirectToDashboardPage$: Observable<Action> = this.actions$
  .ofType(sessionPost.ActionTypes.REQUEST_SUCCESS)
  .do((action: any) => {
    this.routingService.pushRootPage(DashboardPage);
  });
  
  //
  //@Effect({dispatch: false})
  //showErrorToastr: Observable<Action> = this.actions$
  //.ofType(
  //  sessionPost.ActionTypes.REQUEST_FAIL,
  //)
  //.do((action: any) => {
  //  this.toastrService.showEffectsMsg(action.payload);
  //});

}
