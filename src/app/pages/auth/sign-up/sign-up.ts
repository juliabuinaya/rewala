import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthService } from '../../../core/services/auth.service';

@IonicPage({
  name: 'sign-up'
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  
  public formData = {
    email: '',
    username: '',
    password: ''
  };

  constructor(public authService: AuthService) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.authService.signUp({...(this.formData)});
    }
  }
  
  ngOnDestroy() {
    //this.loadingService.dismissLoader();
  }
}
