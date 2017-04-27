import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class UserService {

  constructor(public restangular: Restangular) {
  }
  
  getUserData(token) {
    return this.restangular.one('tokens', token).one('user').get();
  }
  
}