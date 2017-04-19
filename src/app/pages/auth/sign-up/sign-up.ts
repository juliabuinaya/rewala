import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FeedPage } from '../feed-page/feed-page';
import { RoutingService } from '../../services/routing.service';
import { LoadingService } from '../../services/loading.service';
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

  constructor(public authService: AuthService,
    //public routingService: RoutingService,
    //public loadingService: LoadingService
  ) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log({...(this.formData)});
      debugger;
      this.authService.signUpUser({...(this.formData)});
    }
  }
  
  ngOnDestroy() {
    //this.loadingService.dismissLoader();
  }
}
