import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppSharedModule } from '../../shared/shared.module';
import { GroupsPage } from './groups';

@NgModule({
  declarations: [
    GroupsPage
  ],
  imports: [
    AppSharedModule,
    IonicModule.forRoot(GroupsPage)
  ],
  entryComponents: [
    GroupsPage
  ],
  providers: [
  ]
})
export class GroupsModule {}
