import { NgModule } from '@angular/core';

import { CreateQuestionOptionsModule } from './create-question-options/create-question-options.module';
import { CreateQuestionSettingsModule } from './create-question-settings/create-question-settings.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CreateQuestionSettingsModule,
    CreateQuestionOptionsModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CreateQuestionModule {}
