import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';
//actions
import * as spinner from '../../ngrx/spinner/actions/index';

@Injectable()
export class LoadingService {
  
  loader;
  
  constructor(public loadingCtrl: LoadingController,
              public store: Store<IAppState>) {
  }
  
  presentLoader(content = '') {
    this.loader = this.loadingCtrl.create({
      spinner: 'crescent',
      content: content
    });
    
    this.loader.present();
  }
  
  dismissLoader() {
    this.loader.dismiss()
    .catch(err => err);
  }
  
  showSpinner() {
    this.store.dispatch(new spinner.SpinnerLoadingStartAction());
  }
  
  hideSpinner() {
    this.store.dispatch(new spinner.SpinnerLoadingEndAction());
  }
  
}