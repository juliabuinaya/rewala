import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionOptionsPage } from './create-question-options';


@NgModule({
  declarations: [
    CreateQuestionOptionsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionOptionsPage)
  ],
  entryComponents: [
    CreateQuestionOptionsPage
  ],
  providers: [
  ]
})
export class CreateQuestionOptionsModule {}
