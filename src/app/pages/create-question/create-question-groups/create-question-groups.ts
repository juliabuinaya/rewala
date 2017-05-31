import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { RoutingService } from '../../../core/services/routing.service';
import { QuestionsService } from '../../../core/services/questions.service';
import { CreateGroupMembersPage } from '../../create-group/create-group-members/create-group-members';
import { GroupsService } from '../../../core/services/groups.service';


@IonicPage({
  name: 'create-question-groups'
})
@Component({
  selector: 'page-create-question-groups',
  templateUrl: 'create-question-groups.html'
})
export class CreateQuestionGroupsPage {
  
  public search = new FormControl();
  public groups$;
  public displayedGroups$;
  public search$;
  public checkedGroups = {};
  public selectedGroupId;
  public questionSettings;
  
  constructor(public routingService: RoutingService,
              public navParams: NavParams,
              public questionsService: QuestionsService,
              public groupsService: GroupsService) {
  
    this.questionSettings = navParams.get('questionSettings');
    
  }
  
  ngOnInit() {
    this.groups$ = this.groupsService.groups$;
    this.search$ = this.search
    .valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .map(search => search.trim().toLowerCase())
    .startWith('');
    
    this.displayedGroups$ = Observable.combineLatest(this.groups$, this.search$)
    .map(([groups, search]) => {
      return (<any>groups).filter(group => {
        return group.name.trim().toLowerCase().indexOf(search) !== -1;
      });
    });
  }
  
  onGroupSelect(group) {
    this.selectedGroupId = group.id;
  }
  
  onComplete() {
    this.questionSettings.groupId = this.selectedGroupId;
    this.questionsService.createQuestion(this.questionSettings);
  }
  
  createGroup() {
    this.routingService.pushPage(CreateGroupMembersPage);
  }
  
  ngOnDestroy() {
  }
}
