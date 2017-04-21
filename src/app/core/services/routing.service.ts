import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class RoutingService {
  
  constructor() {
  }
  
  
  /** Need to subscribe to routing subjects in the initial(root) page */
  
  public pushRootPage$ = new Subject();
  public pushPage$ = new Subject();
  public popToRootPage$ = new Subject();
  public popPage$ = new Subject();
  
  pushRootPage(page: any, params = {}) {
    let data = {page, params};
    this.pushRootPage$.next(data);
  }
  
  pushPage(page: any, params = {}) {
    let data = {page, params};
    this.pushPage$.next(data);
  }
  
  popToRootPage() {
    this.popToRootPage$.next();
  }
  
  popPage() {
    this.popPage$.next();
  }
}