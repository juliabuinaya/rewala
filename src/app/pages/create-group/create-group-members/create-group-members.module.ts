import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppSharedModule } from '../../../shared/shared.module';

import { CreateGroupMembersPage } from './create-group-members';

@NgModule({
  declarations: [
    CreateGroupMembersPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(CreateGroupMembersPage)
  ],
  entryComponents: [
    CreateGroupMembersPage
  ],
  providers: [
  ]
})
export class CreateGroupMembersModule {}
