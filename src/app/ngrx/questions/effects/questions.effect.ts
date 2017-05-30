import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { RoutingService } from '../../../core/services/routing.service';
import { DashboardPage } from '../../../pages/dashboard/dashboard';

//actions
import * as myQuestionsGet from '../../questions-request/nested-states/my-questions-get/actions/my-questions-get.actions';
import { SetMyQuestionsAction } from '../actions/questions.actions';
import { SpinnerLoadingEndAction } from '../../spinner/actions/spinner.actions';

@Injectable()
export class QuestionsEffects {
  
  constructor(private actions$: Actions,
              public routingService: RoutingService) {
  }
  
  @Effect()
  setMyQuestions$: Observable<Action> = this.actions$
  .ofType(myQuestionsGet.ActionTypes.REQUEST_SUCCESS)
  .map(action => new SetMyQuestionsAction(toPayload(action)));
  
  
  @Effect()
  redirectToDashboardPage$: Observable<Action> = this.actions$
  .ofType(myQuestionsGet.ActionTypes.REQUEST_SUCCESS)
  .map((action: any) => {
    this.routingService.pushRootPage(DashboardPage);
    return new SpinnerLoadingEndAction();
  });
}
