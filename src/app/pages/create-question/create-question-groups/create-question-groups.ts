import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { RoutingService } from '../../../core/services/routing.service';
import { Store } from '@ngrx/store';

import { CreateGroupPage } from '../../create-group/create-group';

import { IAppState } from '../../../ngrx/state/app.state';
//getters
import * as groupsStateGetter from '../../../ngrx/groups/states/groups-getter.state';


@IonicPage({
  name: 'create-question-groups'
})
@Component({
  selector: 'page-create-question-groups',
  templateUrl: 'create-question-groups.html'
})
export class CreateQuestionGroupsPage {
  
  groups$;
  questionSettings;
  checkedGroups = {};
  checkedGroupsIds = [];
  searchString;
  
  
  constructor(public routingService: RoutingService,
              public store: Store<IAppState>,
              public navParams: NavParams) {
  
    this.groups$ = this.store.select(groupsStateGetter.getGroupsEntitiesState);
    this.questionSettings = navParams.get('questionSettings');
    
  }
  
  checkboxChange() {
    this.checkedGroupsIds = _.keys(_.pickBy(this.checkedGroups));
  }
  
  onComplete() {
    //this.checkedGroupsIds = _.reduce(this.checkedGroups, (acc, value, key) => {
    //  return value ? [...acc, key] : acc;
    //}, []);
    console.log(this.checkedGroupsIds);
  }
  
  addGroup() {
    this.routingService.pushPage(CreateGroupPage);
  }
  
}
