import { NgModule } from '@angular/core';

import { CreateQuestionOptionsModule } from './create-question-options/create-question-options.module';
import { CreateQuestionSettingsModule } from './create-question-settings/create-question-settings.module';
import { CreateQuestionGroupsModule } from './create-question-groups/create-question-groups.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CreateQuestionSettingsModule,
    CreateQuestionOptionsModule,
    CreateQuestionGroupsModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CreateQuestionModule {}
