import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionStep6Page } from './create-question-step-6';

@NgModule({
  declarations: [
    CreateQuestionStep6Page
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionStep6Page)
  ],
  entryComponents: [
    CreateQuestionStep6Page
  ],
  providers: [
  ]
})
export class CreateQuestionStep6Module {}
