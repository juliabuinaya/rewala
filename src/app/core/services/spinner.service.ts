import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as spinner from '../../ngrx/spinner/actions/index';
//getters

@Injectable()
export class SpinnerService {
  
  constructor(public store: Store<IAppState>) {
  }
  
  showSpinner() {
    this.store.dispatch(new spinner.SpinnerLoadingStartAction());
  }
  
  hideSpinner() {
    this.store.dispatch(new spinner.SpinnerLoadingEndAction());
  }
  
}