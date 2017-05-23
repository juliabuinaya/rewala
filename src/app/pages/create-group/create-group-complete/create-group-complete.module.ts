import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppSharedModule } from '../../../shared/shared.module';

import { CreateGroupCompletePage } from './create-group-complete';


@NgModule({
  declarations: [
    CreateGroupCompletePage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateGroupCompletePage)
  ],
  entryComponents: [
    CreateGroupCompletePage
  ],
  providers: [
  ]
})
export class CreateGroupCompleteModule {}
