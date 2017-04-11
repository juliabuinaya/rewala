import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AppSharedModule } from '../../../shared/shared.module';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    AppSharedModule,
    IonicPageModule.forChild(LoginPage)
  ],
  entryComponents: [
    LoginPage
  ],
  providers: [
  ]
})
export class LoginModule {}
