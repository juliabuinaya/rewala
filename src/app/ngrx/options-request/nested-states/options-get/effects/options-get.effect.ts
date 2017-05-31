import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { OptionsService } from '../../../../../core/services/options.service';

//actions
import * as optionsGet from '../../options-get/actions/options-get.actions';
import { OptionsGetSuccessAction, OptionsGetFailAction } from '../actions/options-get.actions';


@Injectable()
export class OptionsGetEffects {
  
  constructor(private actions$: Actions,
              public optionsService: OptionsService) {
  }
  
  @Effect()
  getQuestionOptionsRequest$: Observable<Action> = this.actions$
  .ofType(optionsGet.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.optionsService.getQuestionOptionsRequest(payload)
    .map((res: any) => new OptionsGetSuccessAction(res))
    .catch(error => Observable.of(new OptionsGetFailAction(error)));
  });
  
}
