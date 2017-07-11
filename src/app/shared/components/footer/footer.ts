import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RoutingService } from '../../../core/services/routing.service';

import { CreateQuestionSettingsPage } from '../../../pages/create-question/create-question-settings/create-question-settings';
import { QuestionsListPage } from '../../../pages/questions/questions-list/questions-list';
import { DashboardPage } from '../../../pages/dashboard/dashboard';
import { SettingsPage } from '../../../pages/settings/settings';
import { CreateQuestionGroupsPage } from '../../../pages/create-question/create-question-groups/create-question-groups';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {
  
  @Input() currentPageName: string;
  @Input() questionType: string;
  public RESULTS_QUESTIONS = 'Results Questions';
  
  constructor(public routingService: RoutingService,
              public navCtrl: NavController) {
  }
  
  getActivePage(): string {
    return this.navCtrl.getActive().name;
  }
  
  toCreateQuestion() {
    this.routingService.pushPage(CreateQuestionSettingsPage);
  }
  
  toQuestionsList(questionType) {
    this.routingService.pushPage(QuestionsListPage, {questionType});
  }
  
  toDashboardPage() {
    this.routingService.pushRootPage(DashboardPage);
  }
  
  toSettingsPage() {
    this.routingService.pushPage(SettingsPage);
  }
  
  toGroupsPage() {
    this.routingService.pushPage(CreateQuestionGroupsPage);
  }

}
