import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from './pages/home/home';
import { ListPage } from './pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CoreModule } from './core/core.module';
import { AppSharedModule } from './shared/shared.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { SettingsModule } from './pages/settings/settings.module';
import { QuestionModule } from './pages/question/question.module';
import { GroupsModule } from './pages/groups/groups.module';
import { QuestionSettingsModule } from './pages/create-question/question-settings/question-settings.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CoreModule,
    AppSharedModule,

    DashboardModule,
    SettingsModule,
    QuestionModule,
    GroupsModule,

    // create question pages
    QuestionSettingsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
