import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';

//getters
import * as groupsStateGetter from '../../ngrx/groups/states/groups-getter.state';

@IonicPage({
  name: 'groups'
})
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  
  groups$;
  questionSettings;
  
  constructor(public store: Store<IAppState>,
              public navParams: NavParams) {
    
    this.groups$ = this.store.select(groupsStateGetter.getGroupsEntitiesState);
    this.questionSettings = navParams.get('questionSettings');
    console.log(this.questionSettings);
  }
  
  test(group) {
    console.log(group);
  }
  
}
