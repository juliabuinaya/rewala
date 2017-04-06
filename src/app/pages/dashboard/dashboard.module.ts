import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    AppSharedModule,
    IonicModule.forRoot(DashboardPage)
  ],
  entryComponents: [
    DashboardPage
  ],
  providers: [
  ]
})
export class DashboardModule {}
