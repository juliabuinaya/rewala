import { NgModule } from '@angular/core';

import { QuestionModule } from './question/question.module';
import { QuestionsListModule } from './questions-list/questions-list.module';
import { QuestionResultsModule } from './question-results/question-results.module';


@NgModule({
  declarations: [
  ],
  imports: [
    QuestionModule,
    QuestionsListModule,
    QuestionResultsModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class QuestionsModule {}
