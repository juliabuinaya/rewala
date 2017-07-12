import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { UserService } from '../../../core/services/user.service';
import { RoutingService } from '../../../core/services/routing.service';

import { CreateQuestionOptionsPage } from '../create-question-options/create-question-options';

@IonicPage({
  name: 'create-question-settings'
})
@Component({
  selector: 'page-create-question-settings',
  templateUrl: 'create-question-settings.html'
})
export class CreateQuestionSettingsPage {
  
  public settingsForm: FormGroup;
  public userId$;
  public clientId;
  public userIdSubscriber;
  public questionText = null;
  public multiple = false;
  public defaultDate;
  public deadlineDate;
  public currentPageName;

  constructor(public routingService: RoutingService,
              public userService: UserService,
              private fb: FormBuilder) {
  
    this.userId$ = this.userService.userId$;
    this.userIdSubscriber =  this.userId$
    .subscribe(id => this.clientId = id);
  
    this.defaultDate = new Date();
    this.defaultDate.setDate(this.defaultDate.getDate() + 1);
    this.defaultDate = this.defaultDate.toISOString();
    this.deadlineDate = this.defaultDate;
  }
  
  ionViewWillEnter() {
    this.currentPageName = this.constructor.name;
  }
  
  ngOnInit() {
    this.settingsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1024)]],
      deadline: [],
      multiple: []
    });
  }
  
  submit(form) {
    if (form.valid) {
      let questionSettings = {
        clientId: this.clientId,
        text: this.questionText,
        multiple: this.multiple,
        deadline: this.deadlineDate
      };
      this.routingService.pushPage(CreateQuestionOptionsPage, {questionSettings});
    }
  }
  
  ngOnDestroy() {
    this.userIdSubscriber.unsubscribe();
  }

}
