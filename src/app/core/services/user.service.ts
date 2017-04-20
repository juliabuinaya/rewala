import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { Store } from '@ngrx/store';

@Injectable()
export class UserService {

  constructor(public restangular: Restangular) {
  }
  
  getUserData(token) {
    return this.restangular.one('tokens', token).one('user').get();
  }
  
}