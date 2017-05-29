import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { RoutingService } from '../../../core/services/routing.service';
import { CreateQuestionGroupsPage } from '../create-question-groups/create-question-groups';


@IonicPage({
  name: 'create-question-options'
})
@Component({
  selector: 'page-create-question-options',
  templateUrl: 'create-question-options.html'
})
export class CreateQuestionOptionsPage {
  
  public optionsForm: FormGroup;
  questionSettings;
  optionText = '';
  options = [];
  minOptionsQuantity = 2;
  showForm = true;
  
  constructor(public routingService: RoutingService,
              public navParams: NavParams,
              private fb: FormBuilder) {
  
    this.questionSettings = navParams.get('questionSettings');
  }
  
  ngOnInit() {
    this.optionsForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1024)]]
    });
  }
  
  onSubmit(form) {
    if (form.valid) {
      this.options.push({text: this.optionText});
      this.optionText = '';
    }
  }
  
  deleteOption(index) {
    this.options.splice(index, 1);
  }
  
  toNextStep() {
    this.questionSettings.options = this.options;
    this.routingService.pushPage(CreateQuestionGroupsPage, {questionSettings: this.questionSettings});
  }
  
  ngOnDestroy() {
  }
  
}
