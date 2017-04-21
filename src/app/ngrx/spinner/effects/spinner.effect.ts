import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { LoadingService } from '../../../core/services/loading.service';

//actions
import * as spinner from '../actions/index';

@Injectable()
export class SpinnerEffects {
  
  constructor(private actions$: Actions,
              public loadingService: LoadingService) {
  }
  
  @Effect({dispatch: false})
  spinnerStart$: Observable<Action> = this.actions$
  .ofType(spinner.ActionTypes.LOADING_START)
  .map(toPayload)
  .do((payload) => this.loadingService.presentLoader(payload));
  
  @Effect({dispatch: false})
  spinnerEnd$: Observable<Action> = this.actions$
  .ofType(spinner.ActionTypes.LOADING_END)
  .do(() => this.loadingService.dismissLoader());

}
