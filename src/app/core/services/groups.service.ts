import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class GroupsService {

  constructor(public restangular: Restangular) {
  }
  
  getUserGroups(userId) {
    return this.restangular.one('clients', userId).getList('groups');
  }
  
}