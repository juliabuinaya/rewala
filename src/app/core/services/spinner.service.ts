import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as spinner from '../../ngrx/spinner/actions/index';
//getters
import * as spinnerStateLoadingGetter from '../../ngrx/spinner/states/spinner-getter-state';


@Injectable()
export class SpinnerService {
  
  public spinnerStateLoading$: Observable<any>;
  
  constructor(public store: Store<IAppState>) {
  }
  
  showSpinner() {
    this.store.dispatch(new spinner.SpinnerLoadingStartAction());
  }
  
  hideSpinner() {
    this.store.dispatch(new spinner.SpinnerLoadingEndAction());
  }
  
}