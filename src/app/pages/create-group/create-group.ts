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
  
  public searchString;
  public findContactStr = '';
  
  constructor(public store: Store<IAppState>) {
  }
  
  onFindSubmit(form) {
    if (form.valid) {
      console.log(this.findContactStr);   // <--- need add to contacts
    }
  }
  
}
