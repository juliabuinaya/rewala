import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { SettingsPage } from './settings';

@NgModule({
  declarations: [
    SettingsPage
  ],
  imports: [
    AppSharedModule,
    IonicModule.forRoot(SettingsPage)
  ],
  entryComponents: [
    SettingsPage
  ],
  providers: [
  ]
})
export class SettingsModule {}
