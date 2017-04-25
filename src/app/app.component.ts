import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Store } from '@ngrx/store';

import { RootPage } from './pages/root/root';
import { DashboardPage } from './pages/dashboard/dashboard';
import { SettingsPage } from './pages/settings/settings';
import { CreateQuestionStep1Page } from './pages/create-question/create-question-step-1/create-question-step-1';
import { GroupsPage } from './pages/groups/groups';
import { ResultsPage } from './pages/results/results';
import { SignUpPage } from './pages/auth/sign-up/sign-up';
import { SignInPage } from './pages/auth/sign-in/sign-in';
import { AuthService } from './core/services/auth.service';


import { IAppState } from './ngrx/state/app.state';
import * as userStateGetter from './ngrx/user/states/user-getter.state';

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
      public store: Store<IAppState>,
      public authService: AuthService) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign Up', component: SignUpPage },
      { title: 'Sign In', component: SignInPage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Add Question', component: CreateQuestionStep1Page },
      { title: 'Results', component: ResultsPage },
      { title: 'Groups', component: GroupsPage },
      { title: 'Settings', component: SettingsPage }
    ];

    this.user$ = this.store.select(userStateGetter.getUserState);
    
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.authService.logout();
  }
}
