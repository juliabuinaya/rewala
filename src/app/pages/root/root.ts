import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RoutingService } from '../../core/services/routing.service';
import { LoadingService } from '../../core/services/loading.service';
import { SessionService } from '../../core/services/session.service';
import { AuthService } from '../../core/services/auth.service';

import { DashboardPage } from '../dashboard/dashboard';
import { SignInPage } from '../auth/sign-in/sign-in';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-root',
  templateUrl: 'root.html'
})
export class RootPage {
  
  constructor(public navCtrl: NavController,
              public routingService: RoutingService,
              public loadingService: LoadingService,
              public sessionService: SessionService,
              public authService: AuthService) {
  }
  
  ngOnInit() {
    
    /** Show loading spinner */
    
    this.loadingService.presentLoader();
    
    /** Subscribing on routing service streams  */
    
    this.routingService.pushRootPage$
    .subscribe((page: any) => {
      this.navCtrl.setRoot(page)
      .catch(() => console.log('should I stay or should I go now'));
    });
    
    this.routingService.pushPage$
    .subscribe((page: any) => {
      this.navCtrl.push(page);
    });
    
    this.routingService.popPage$
    .subscribe(() => {
      this.navCtrl.pop();
    });
    
    this.routingService.popToRootPage$
    .subscribe(() => {
      this.navCtrl.popToRoot();
    });
    
    
    /** Need to check access token and then change page */

    //this.routingService.pushRootPage(SignInPage);
    
    //this.sessionService.getAccessToken()
    //.filter(token => !!token)
    //.switchMap(token => {
    //  return !token ? Observable.of(false) : this.authService.getCurrentUser(token);
    //})
    //.subscribe(res => {
    //  if (res) {
    //    this.routingService.pushRootPage(DashboardPage);
    //    //this.userStreams.updateCurrentToken(this.currentToken);
    //  }
    //  else {
    //    this.routingService.pushRootPage(SignInPage);
    //  }
    //});
  }
  
  ngOnDestroy() {
    /** Hide loading spinner */
    
    this.loadingService.dismissLoader();
  }
}
