import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
//import { UserService } from '../../services/user.service';
//import { LoadingService } from '../../services/loading.service';

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
  
  constructor(
    public navCtrl: NavController
    //public userService: UserService,
    //public routingService: RoutingService,
    //public loadingService: LoadingService
  ) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log(form);
    }
  }
  
  toSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

  ngOnDestroy() {
    //this.loadingService.dismissLoader();
  }
}