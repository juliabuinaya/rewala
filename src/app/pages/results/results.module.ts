import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { ResultsPage } from './results';

@NgModule({
  declarations: [
    ResultsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(ResultsPage)
  ],
  entryComponents: [
    ResultsPage
  ],
  providers: [
  ]
})
export class ResultsModule {}
