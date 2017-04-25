import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionStep5Page } from './create-question-step-5';

@NgModule({
  declarations: [
    CreateQuestionStep5Page
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionStep5Page)
  ],
  entryComponents: [
    CreateQuestionStep5Page
  ],
  providers: [
  ]
})
export class CreateQuestionStep5Module {}
