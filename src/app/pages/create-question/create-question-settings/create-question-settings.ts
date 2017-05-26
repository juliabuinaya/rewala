import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

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
  
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public clientId;
  public text;
  public multiple = false;
  public defaultDate;
  public deadlineDate;

  constructor(public routingService: RoutingService,
              public store: Store<IAppState>) {
  
    this.store.select(userStateGetter.getIdFromState)
    .takeUntil(this.ngUnsubscribe)
    .subscribe(id => this.clientId = id);
  
    this.defaultDate = new Date();
    this.defaultDate.setDate(this.defaultDate.getDate() + 2);
    this.defaultDate = this.defaultDate.toISOString();
    this.deadlineDate = this.defaultDate;
  }
  
  submit(form) {
    if (form.valid) {
      let questionSettings = {
        clientId: this.clientId,
        text: this.text,
        multiple: this.multiple,
        deadline: this.deadlineDate
      };
      this.routingService.pushPage(CreateQuestionOptionsPage, {questionSettings});
    }
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
