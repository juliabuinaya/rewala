import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionOptionsPage } from '../create-question-options/create-question-options';

import { IAppState } from '../../../ngrx/state/app.state';
import * as userStateGetter from '../../../ngrx/user/states/user-getter.state';


@IonicPage({
  name: 'create-question-settings'
})
@Component({
  selector: 'page-create-question-settings',
  templateUrl: 'create-question-settings.html'
})
export class CreateQuestionSettingsPage {
  
  public settingsForm: FormGroup;
  public clientId;
  public clientIdSubscriber;
  public questionText;
  public multiple = false;
  public defaultDate;
  public deadlineDate;

  constructor(public routingService: RoutingService,
              public store: Store<IAppState>,
              private fb: FormBuilder) {
  
    this.clientIdSubscriber = this.store.select(userStateGetter.getIdFromState)
    .subscribe(id => this.clientId = id);
  
    this.defaultDate = new Date();
    this.defaultDate.setDate(this.defaultDate.getDate() + 2);
    this.defaultDate = this.defaultDate.toISOString();
    this.deadlineDate = this.defaultDate;
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
    this.clientIdSubscriber.unsubscribe();
  }

}
