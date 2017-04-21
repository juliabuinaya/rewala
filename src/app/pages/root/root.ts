import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../core/services/routing.service';

// app state
import * as appState from '../../ngrx/state/app.state';

//actions
import * as spinner from '../../ngrx/spinner/actions/index';

@Component({
  selector: 'page-root',
  templateUrl: 'root.html'
})
export class RootPage {
  
  constructor(public navCtrl: NavController,
              public routingService: RoutingService,
              public store: Store<appState.IAppState>) {
  }
  
  ngOnInit() {
    
    /** Show loading spinner */
    this.store.dispatch(new spinner.SpinnerLoadingStartAction());
    
    
    /** Subscribing on routing service streams  */
    this.routingService.pushRootPage$
    .subscribe((data: any) => {
      this.navCtrl.setRoot(data.page, data.params)
      .catch(() => console.log('should I stay or should I go now'));
    });
    
    this.routingService.pushPage$
    .subscribe((data: any) => {
      this.navCtrl.push(data.page, data.params);
    });
    
    this.routingService.popPage$
    .subscribe(() => {
      this.navCtrl.pop();
    });
    
    this.routingService.popToRootPage$
    .subscribe(() => {
      this.navCtrl.popToRoot();
    });
  }
  
  ngOnDestroy() {
    
    /** Hide loading spinner */
    this.store.dispatch(new spinner.SpinnerLoadingEndAction());
  }
}
