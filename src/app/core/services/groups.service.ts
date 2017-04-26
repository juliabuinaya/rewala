import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Injectable()
export class UserService {

  constructor(public restangular: Restangular) {
  }
  
  getUserGroups(userId) {
    return this.restangular.one('clients', userId).one('groups').get();
  }
  
}