import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { SignUpPage } from './sign-up';

@NgModule({
  declarations: [
    SignUpPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(SignUpPage)
  ],
  entryComponents: [
    SignUpPage
  ],
  providers: [
  ]
})
export class SignUpModule {}
