import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { GroupsPage } from './groups';

@NgModule({
  declarations: [
    GroupsPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(GroupsPage)
  ],
  entryComponents: [
    GroupsPage
  ],
  providers: [
  ]
})
export class GroupsModule {}
