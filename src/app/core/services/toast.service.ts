import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService {

  constructor(public toastCtrl: ToastController) {
  }
  
  presentToast(message, duration=4000, position='bottom', cssClass='toast-error') {
    let toast = this.toastCtrl.create({
      message,
      duration,
      position,
      cssClass
    });
    toast.present();
  }
}