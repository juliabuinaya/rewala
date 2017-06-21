import { NgModule } from '@angular/core';

import { QuestionModule } from './question/question.module';
import { QuestionsListModule } from './questions-list/questions-list.module';


@NgModule({
  declarations: [
  ],
  imports: [
    QuestionModule,
    QuestionsListModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class QuestionsModule {}
