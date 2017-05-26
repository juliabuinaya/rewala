import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavParams } from 'ionic-angular';

import { GroupsService } from '../../../core/services/groups.service';

@IonicPage({
  name: 'create-group-complete'
})
@Component({
  selector: 'page-create-group-complete',
  templateUrl: 'create-group-complete.html'
})
export class CreateGroupCompletePage {
  
  public createGroupForm: FormGroup;
  public groupData;
  public groupName = null;
  
  constructor(private fb: FormBuilder,
              public navParams: NavParams,
              public groupsService: GroupsService) {
    this.groupData = navParams.get('groupData');
  }
  
  ngOnInit() {
    this.createGroupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]]
    });
  }
  
  createGroup() {
    console.log(this.groupData);
    //this.groupsService.createGroup(this.groupData);
  }
  
  ngOnDestroy() {
  }
}
