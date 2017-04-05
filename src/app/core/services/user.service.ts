import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Restangular } from 'ng2-restangular';

@Injectable()
export class UserService {
  selfData: any;
  selfData$: Observable<any>;
  updateSelfData$: Subject<any> = new Subject<any>();

  constructor(
    public injector: Injector,
    public restangular: Restangular
  ) {
  }

  loadSelfData() {
    return Observable.of(true);
  }
  
}