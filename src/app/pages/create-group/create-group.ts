import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';

//getters
import * as groupsStateGetter from '../../ngrx/groups/states/groups-getter.state';

@IonicPage({
  name: 'create-group'
})
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html'
})
export class CreateGroupPage {
  
  searchString;
  addContactText = '';
  
  constructor(public store: Store<IAppState>) {
  }
  
  onSubmit(form) {
    if (form.valid) {
      console.log(this.addContactText);   // <--- need add to contacts
    }
  }
  
}
