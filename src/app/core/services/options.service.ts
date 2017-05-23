import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../../ngrx/state/app.state';
import * as optionsRequest from '../../ngrx/options-request/actions/index';

@Injectable()
export class OptionsService {
  
  constructor(public store: Store<IAppState>, public restangular: Restangular) {
  }
  
  createOptions(data) {
    console.log(data);
    this.store.dispatch(new optionsRequest.OptionsPostAction(data));
  }
  
  createOptionsRequest(payload: any) {
    return Observable.of(true);
    //return this.restangular.all('questions').post(payload);
  }

}