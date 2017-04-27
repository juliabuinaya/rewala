import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { CreateQuestionSettingsPage } from './create-question-settings';


@NgModule({
  declarations: [
    CreateQuestionSettingsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateQuestionSettingsPage)
  ],
  entryComponents: [
    CreateQuestionSettingsPage
  ],
  providers: [
  ]
})
export class CreateQuestionSettingsModule {}
