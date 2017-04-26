import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'groups'
})
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  
  groups = [
    {
      name: 'Group A'
    },
    {
      name: 'Group B'
    },
    {
      name: 'Group C'
    }
  ];
  
  users = [
    {
      name: 'Mark McNulty'
    },
    {
      name: 'John Kavanagh'
    },
    {
      name: 'Anie Columbus'
    }
  ];

  constructor() {
  }

}
