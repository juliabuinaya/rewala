import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { RoutingService } from '../../core/services/routing.service';
import { LoadingService } from '../../core/services/loading.service';

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
              public store: Store<appState.IAppState>,
              public loadingService: LoadingService) {
  }
  
  ngOnInit() {
    
    /** Show loading spinner */
    this.loadingService.showSpinner();
    
    /** Subscribing on routing service streams  */
    this.routingService.pushRootPage$
    .subscribe((data: any) => {
      this.navCtrl.setRoot(data.page, data.params)
      .catch(() => console.log('nav setRoot error'));
    });
    
    this.routingService.pushPage$
    .subscribe((data: any) => {
      this.navCtrl.push(data.page, data.params)
      .catch(() => console.log('nav push error'));
    });
    
    this.routingService.popPage$
    .subscribe(() => {
      this.navCtrl.pop();
    });
    
    this.routingService.popToRootPage$
    .subscribe(() => {
      this.navCtrl.popToRoot();
    });
  
    this.routingService.remove$
    .subscribe((data: any) => {
      this.navCtrl.remove(data.startIndex, data.removeCount);
    });
  
    this.routingService.removeFromActive$
    .subscribe((removeCount: number) => {
      this.navCtrl.remove(this.navCtrl.getActive().index - 1, removeCount);
    });
    
  }
  
  ngOnDestroy() {
    
    /** Hide loading spinner */
    this.store.dispatch(new spinner.SpinnerLoadingEndAction());
  }
}
