import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../../core/services/index';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public user: any = {
    email: <string> null,
    password: <string> null
  };

  constructor(
      public navCtrl: NavController,
      public authService: AuthService
  ) {

  }

  onSubmit() {
    console.log('settings saved');
  }

  toSignUpPage() {
    // this.routingService.setPage$.next(SignUpPage);
  }

  googleLogin() {
    this.authService.googleLogin();
  }

}
