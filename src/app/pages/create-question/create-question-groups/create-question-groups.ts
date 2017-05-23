import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

import { RoutingService } from '../../../core/services/routing.service';
import { QuestionsService } from '../../../core/services/questions.service';
import { CreateGroupMembersPage } from '../../create-group/create-group-members/create-group-members';

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
  
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public search = new FormControl();
  public groups$;
  public groups;
  public displayedGroups;
  public checkedGroups = {};
  public selectedGroupId;
  public questionSettings;
  
  constructor(public routingService: RoutingService,
              public store: Store<IAppState>,
              public navParams: NavParams,
              public questionsService: QuestionsService) {
  
    this.groups$ = this.store.select(groupsStateGetter.getGroupsEntitiesState);
    
    this.groups$
    .takeUntil(this.ngUnsubscribe)
    .subscribe(groups => this.groups = groups);
    
    this.questionSettings = navParams.get('questionSettings');
  }
  
  ngOnInit() {
    this.displayedGroups = this.groups;
    this.search
    .valueChanges
    .takeUntil(this.ngUnsubscribe)
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(search => {
      let searchQuery = search.trim().toLowerCase();
      this.displayedGroups = this.groups.filter(group => {
        let searchValue = group.name.trim().toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
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
  
  addGroup() {
    this.routingService.pushPage(CreateGroupMembersPage);
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
