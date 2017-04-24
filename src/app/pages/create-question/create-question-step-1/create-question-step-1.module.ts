import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionStep1Page } from './create-question-step-1';

@NgModule({
  declarations: [
    CreateQuestionStep1Page
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionStep1Page)
  ],
  entryComponents: [
    CreateQuestionStep1Page
  ],
  providers: [
  ]
})
export class CreateQuestionStep1Module {}
