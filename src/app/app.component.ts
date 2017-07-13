import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ToastService } from './core/services/toast.service';

import { RootPage } from './pages/root/root';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = RootPage;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public toastService: ToastService) {
    
    this.initializeApp();
    
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
  
      let lastTimeBackPress = 0;
      let timePeriodToExit  = 2000;
  
      this.platform.registerBackButtonAction(() => {
        if(this.nav.canGoBack()) {
          this.nav.pop();
        }
        else {
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            this.toastService.presentToast('Press back again to exit app', 2000, 'bottom', '');
            lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
}
