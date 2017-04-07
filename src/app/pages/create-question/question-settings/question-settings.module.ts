import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { QuestionSettingsPage } from './question-settings';

@NgModule({
  declarations: [
    QuestionSettingsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(QuestionSettingsPage)
  ],
  entryComponents: [
    QuestionSettingsPage
  ],
  providers: [
  ]
})
export class QuestionSettingsModule {}
