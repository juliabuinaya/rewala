import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
import { Restangular } from 'ng2-restangular';
import { GoogleAuth } from '@ionic/cloud-angular';

@Injectable()
export class AuthService {

  constructor(
    public restangular: Restangular,
    public googleAuth: GoogleAuth,
  ) {
  }

  login(data) {

  }

  signup(data) {

  }

  googleLogin() {
    this.googleAuth.login().then(res => {
      alert('Logged in');
      debugger;
    })
        .catch(err => {
          debugger;
        });
  }

  googleLogout() {
    this.googleAuth.logout();
  }
  
}