import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService {

  constructor(public toastCtrl: ToastController) {
  }
  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message,
      duration: 4000,
      position: 'bottom',
      cssClass: 'toast-error'
    });
    toast.present();
  }
}