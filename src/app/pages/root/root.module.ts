import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { RootPage } from './root';

@NgModule({
  declarations: [
    RootPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(RootPage)
  ],
  entryComponents: [
    RootPage
  ],
  providers: [
  ]
})
export class RootModule {}
