import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CoreModule } from './core/core.module';
import { AppSharedModule } from './shared/shared.module';

// pages
import { AuthModule } from './pages/auth/auth.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { SettingsModule } from './pages/settings/settings.module';
import { GroupsModule } from './pages/groups/groups.module';
import { CreateQuestionModule } from './pages/create-question/create-question.module';
import { ResultsModule } from './pages/results/results.module';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RootModule } from './pages/root/root.module';

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
    GroupsModule,
    ResultsModule,

    // create question pages
  
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
