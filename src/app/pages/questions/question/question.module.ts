import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { QuestionPage } from './question';

@NgModule({
  declarations: [
    QuestionPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(QuestionPage)
  ],
  entryComponents: [
    QuestionPage
  ],
  providers: [
  ]
})
export class QuestionModule {}
