import { NgModule } from '@angular/core';

import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SignInModule,
    SignUpModule
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class AuthModule {}
