import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { OptionsService } from '../../../../../core/services/options.service';

import * as optionsPost from '../actions/options-post.actions';
import { OptionsPostSuccessAction, OptionsPostFailAction } from '../actions/options-post.actions';


@Injectable()
export class OptionsPostEffects {
  
  constructor(private actions$: Actions, public optionsService: OptionsService) {
  }
  
  @Effect()
  questionPost$: Observable<Action> = this.actions$
  .ofType(optionsPost.ActionTypes.REQUEST)
  .map(toPayload)
  .switchMap((payload: any) => {
    return this.optionsService.createOptionsRequest(payload)
    .map((res: any) => new OptionsPostSuccessAction(res))
    .catch(error => Observable.of(new OptionsPostFailAction(error)));
  });
  
}
