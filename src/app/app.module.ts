import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { CoreModule } from './core/core.module';
import { AppSharedModule } from './shared/shared.module';

import {
  RootModule,
  AuthModule,
  DashboardModule,
  SettingsModule,
  CreateQuestionModule,
  QuestionsModule,
  CreateGroupModule
} from './pages/index'

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay'
    }),
    CoreModule,
    AppSharedModule,
    
    RootModule,
    AuthModule,
    DashboardModule,
    SettingsModule,
    CreateQuestionModule,
    QuestionsModule,
    CreateGroupModule,

    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
