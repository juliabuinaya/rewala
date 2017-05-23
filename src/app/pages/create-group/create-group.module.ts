import { NgModule } from '@angular/core';

import { CreateGroupMembersModule } from './create-group-members/create-group-members.module';
import { CreateGroupCompleteModule } from './create-group-complete/create-group-complete.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CreateGroupMembersModule,
    CreateGroupCompleteModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CreateGroupModule {}
