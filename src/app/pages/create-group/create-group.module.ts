import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { CreateGroupPage } from './create-group';

@NgModule({
  declarations: [
    CreateGroupPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateGroupPage)
  ],
  entryComponents: [
    CreateGroupPage
  ],
  providers: [
  ]
})
export class CreateGroupModule {}
