import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionGroupsPage } from './create-question-groups';


@NgModule({
  declarations: [
    CreateQuestionGroupsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionGroupsPage)
  ],
  entryComponents: [
    CreateQuestionGroupsPage
  ],
  providers: [
  ]
})
export class CreateQuestionGroupsModule {}
