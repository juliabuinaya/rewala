import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { AuthService } from '../../../core/services/auth.service';
import { RoutingService } from '../../../core/services/routing.service';

@IonicPage({
  name: 'sign-in'
})
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {
  
  private formData = {
    email: '',
    password: ''
  };
  
  constructor(public authService: AuthService,
              public routingService: RoutingService) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.formData.email = this.formData.email.trim();
      this.formData.password = this.formData.password.trim();
      this.authService.signIn({...(this.formData)});
    }
  }
  
  toSignUpPage() {
    this.routingService.pushPage(SignUpPage);
  }

  ngOnDestroy() {
  }
}