import { NgModule } from '@angular/core';

import { CreateQuestionStep1Module } from './create-question-step-1/create-question-step-1.module';
import { CreateQuestionStep2Module } from './create-question-step-2/create-question-step-2.module';
import { CreateQuestionStep3Module } from './create-question-step-3/create-question-step-3.module';
import { CreateQuestionStep4Module } from './create-question-step-4/create-question-step-4.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CreateQuestionStep1Module,
    CreateQuestionStep2Module,
    CreateQuestionStep3Module,
    CreateQuestionStep4Module
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CreateQuestionModule {}
