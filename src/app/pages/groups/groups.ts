import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  
  constructor(public store: Store<IAppState>) {
    this.groups$ = this.store.select(groupsStateGetter.getGroupsEntitiesState);
  }
  
  test(group) {
    console.log(group);
  }
  
}
