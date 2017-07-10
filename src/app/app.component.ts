import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ToastService } from './core/services/toast.service';

import { RootPage } from './pages/root/root';
import { DashboardPage } from './pages/dashboard/dashboard';


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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
  
      let lastTimeBackPress = 0;
      let timePeriodToExit  = 2000;
  
      this.platform.registerBackButtonAction(() => {
        // get current active page
        let view = this.nav.getActive();
        if (view.component.name == "DashboardPage") {
          //Double check to exit app
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
            this.platform.exitApp(); //Exit from app
          } else {
            this.toastService.presentToast('Press back again to exit app', 2000, 'bottom', '');
            lastTimeBackPress = new Date().getTime();
          }
        } else {
          // go to previous page
          this.nav.pop();
        }
      });
    });
  }
}
