import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { DashboardPage } from './pages/dashboard/dashboard';
import { SettingsPage } from './pages/settings/settings';
import { GroupsPage } from './pages/groups/groups';
import { QuestionSettingsPage } from './pages/create-question/question-settings/question-settings';
import { ResultsPage } from './pages/results/results';
import { SignUpPage } from './pages/auth/sign-up/sign-up';
import { SignInPage } from './pages/auth/sign-in/sign-in';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      private storage: Storage
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign Up', component: SignUpPage },
      { title: 'Sign In', component: SignInPage },
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Add Question', component: QuestionSettingsPage },
      { title: 'Results', component: ResultsPage },
      { title: 'Groups', component: GroupsPage },
      { title: 'Settings', component: SettingsPage }
    ];

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

  }
}
