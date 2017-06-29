import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { QuestionResultsPage } from './question-results';

@NgModule({
  declarations: [
    QuestionResultsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(QuestionResultsPage)
  ],
  entryComponents: [
    QuestionResultsPage
  ],
  providers: [
  ]
})
export class QuestionResultsModule {}
