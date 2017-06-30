import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';
import { ToastService } from './core/services/toast.service';

import { RootPage } from './pages/root/root';
import { SignInPage } from './pages/auth/sign-in/sign-in';
import { DashboardPage } from './pages/dashboard/dashboard';
import { SettingsPage } from './pages/settings/settings';
import { CreateQuestionSettingsPage } from './pages/create-question/create-question-settings/create-question-settings';
import { CreateQuestionGroupsPage } from './pages/create-question/create-question-groups/create-question-groups';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RootPage;
  pages: Array<{title: string, component: any}>;
  user$;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public authService: AuthService,
      public userService: UserService,
      public toastService: ToastService) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Create new question', component: CreateQuestionSettingsPage },
      { title: 'My groups', component: CreateQuestionGroupsPage },
      { title: 'Settings', component: SettingsPage }
    ];

    this.user$ = this.userService.user$;
    
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
  
  toSignInPage() {
    this.nav.setRoot(SignInPage);
  }
  
  toDashboardPage() {
    this.nav.setRoot(DashboardPage);
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  logout() {
    this.authService.logout();
  }
}
