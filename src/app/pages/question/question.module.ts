import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { QuestionPage } from './question';

@NgModule({
  declarations: [
    QuestionPage
  ],
  imports: [
    AppSharedModule,
    IonicModule.forRoot(QuestionPage)
  ],
  entryComponents: [
    QuestionPage
  ],
  providers: [
  ]
})
export class QuestionModule {}
