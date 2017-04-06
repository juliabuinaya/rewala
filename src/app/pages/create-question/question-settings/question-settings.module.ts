import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { QuestionSettingsPage } from './question-settings';

@NgModule({
  declarations: [
    QuestionSettingsPage
  ],
  imports: [
    AppSharedModule,
    IonicModule.forRoot(QuestionSettingsPage)
  ],
  entryComponents: [
    QuestionSettingsPage
  ],
  providers: [
  ]
})
export class QuestionSettingsModule {}
