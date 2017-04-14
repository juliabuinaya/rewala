import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from './pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CoreModule } from './core/core.module';
import { AppSharedModule } from './shared/shared.module';

// pages
import { AuthModule } from './pages/auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { SettingsModule } from './pages/settings/settings.module';
import { QuestionModule } from './pages/question/question.module';
import { GroupsModule } from './pages/groups/groups.module';
import { QuestionSettingsModule } from './pages/create-question/question-settings/question-settings.module';
import { ResultsModule } from './pages/results/results.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay'
    }),
    CoreModule,
    AppSharedModule,

    AuthModule,
    DashboardModule,
    SettingsModule,
    QuestionModule,
    GroupsModule,
    ResultsModule,

    // create question pages
    QuestionSettingsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
