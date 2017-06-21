import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { RoutingService } from '../../core/services/routing.service';


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})
export class ResultsPage {
  
  constructor(public navParams: NavParams,
              public routingService: RoutingService) {

  }
  
  ngOnInit() {
  }

}
