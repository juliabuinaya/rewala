import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService {
  
  loader;
  
  constructor(public loadingCtrl: LoadingController) {
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
}