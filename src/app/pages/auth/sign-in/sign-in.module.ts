import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { SignInPage } from './sign-in';

@NgModule({
  declarations: [
    SignInPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(SignInPage)
  ],
  entryComponents: [
    SignInPage
  ],
  providers: [
  ]
})
export class SignInModule {}
