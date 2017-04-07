import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(DashboardPage)
  ],
  entryComponents: [
    DashboardPage
  ],
  providers: [
  ]
})
export class DashboardModule {}
