import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(SettingsPage)
  ],
  entryComponents: [
    SettingsPage
  ],
  providers: [
  ]
})
export class SettingsModule {}
