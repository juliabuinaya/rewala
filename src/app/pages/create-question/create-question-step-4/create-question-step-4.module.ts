import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionStep4Page } from './create-question-step-4';

@NgModule({
  declarations: [
    CreateQuestionStep4Page
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionStep4Page)
  ],
  entryComponents: [
    CreateQuestionStep4Page
  ],
  providers: [
  ]
})
export class CreateQuestionStep4Module {}
