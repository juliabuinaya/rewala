import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { QuestionsListPage } from './questions-list';

@NgModule({
  declarations: [
    QuestionsListPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(QuestionsListPage)
  ],
  entryComponents: [
    QuestionsListPage
  ],
  providers: [
  ]
})
export class QuestionsListModule {}
