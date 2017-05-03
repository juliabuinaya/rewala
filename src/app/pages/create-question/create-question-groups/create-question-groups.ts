import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import { RoutingService } from '../../../core/services/routing.service';
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
  groups;
  displayedGroups;
  groupsSubscriber;
  checkedGroups = {};
  checkedGroupsIds = [];
  search = new FormControl();
  searchSubscriber;
  questionSettings;
  
  
  constructor(public routingService: RoutingService,
              public store: Store<IAppState>,
              public navParams: NavParams) {
  
    this.groups$ = this.store.select(groupsStateGetter.getGroupsEntitiesState);
    this.groupsSubscriber = this.groups$.subscribe(groups => this.groups = groups);
    this.questionSettings = navParams.get('questionSettings');
  }
  
  ngOnInit() {
    this.displayedGroups = this.groups;
    this.searchSubscriber = this.search
    .valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(search => {
      let searchQuery = search.trim().toLowerCase();
      this.displayedGroups = this.groups.filter(group => {
        let searchValue = group.name.trim().toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      });
      console.log(this.displayedGroups);
    });
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
  
  ngOnDestroy() {
    this.searchSubscriber.unsubscribe();
    this.groupsSubscriber.unsubscribe();
  }
  
}
