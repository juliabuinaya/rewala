import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionStep2Page } from './create-question-step-2';

@NgModule({
  declarations: [
    CreateQuestionStep2Page
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionStep2Page)
  ],
  entryComponents: [
    CreateQuestionStep2Page
  ],
  providers: [
  ]
})
export class CreateQuestionStep2Module {}
