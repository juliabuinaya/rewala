import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { AnswersService } from '../../../../../core/services/answers.service';
import { RoutingService } from '../../../../../core/services/routing.service';
import { ToastService } from '../../../../../core/services/toast.service';

//actions
import * as answerPost from '../actions/answer-post.actions';
import { AnswerPostFailAction, AnswerPostSuccessAction } from '../actions/answer-post.actions';
import { SpinnerLoadingEndAction, SpinnerLoadingStartAction } from '../../../../spinner/actions/spinner.actions';


@Injectable()
export class AnswerPostEffects {
  
  constructor(private actions$: Actions,
              public answersService: AnswersService,
              public routingService: RoutingService,
              public toastService: ToastService) {
  }
  
  @Effect()
  answerPost$: Observable<Action> = this.actions$
  .ofType(answerPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.answersService.createAnswerRequest(payload)
    .map((res: any) => new AnswerPostSuccessAction(res))
    .catch(error => Observable.of(new AnswerPostFailAction(error)));
  });
  
  @Effect()
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(answerPost.ActionTypes.REQUEST)
  .map((action: any) => new SpinnerLoadingStartAction());
  
  @Effect()
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(answerPost.ActionTypes.REQUEST_SUCCESS,
          answerPost.ActionTypes.REQUEST_FAIL)
  .map((action: any) => new SpinnerLoadingEndAction());
  
  @Effect({dispatch: false})
  postSuccessRedirect$: Observable<Action> = this.actions$
  .ofType(answerPost.ActionTypes.REQUEST_SUCCESS)
  .do((action: any) => {
    let ms = 2000;
    this.toastService.presentToast('Vote has been accepted', ms, 'middle', '');
    setTimeout(() => this.routingService.popPage(), ms);
  });
  
}
