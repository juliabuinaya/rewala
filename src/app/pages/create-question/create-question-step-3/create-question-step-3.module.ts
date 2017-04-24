import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionStep3Page } from './create-question-step-3';

@NgModule({
  declarations: [
    CreateQuestionStep3Page
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionStep3Page)
  ],
  entryComponents: [
    CreateQuestionStep3Page
  ],
  providers: [
  ]
})
export class CreateQuestionStep3Module {}
