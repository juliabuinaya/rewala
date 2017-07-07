import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { QuestionsService } from "./questions.service";


@Injectable()
export class AlertService {

  constructor(public alertCtrl: AlertController,
              public questionsService: QuestionsService) {
  }
  
  showDeleteQuestionAlert(question) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete this question?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            return;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.questionsService.deleteQuestion(question.id);
          }
        }
      ],
      enableBackdropDismiss: false
    });
    confirm.present();
  }
  
  showSuccessDeleteQuestionAlert(ms) {
    let alert = this.alertCtrl.create({
      title: 'Question has been deleted',
      enableBackdropDismiss: false
    });
    alert.present();
    setTimeout(() => alert.dismiss(), ms);
  }
  
  showChangeVoteAlert() {
    let observable$ = Observable.create(observer => {
      let confirm = this.alertCtrl.create({
        title: 'Are you sure you want to change your vote?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              return observer.next(false);
            }
          },
          {
            text: 'Yes',
            handler: () => {
              return observer.next(true);
            }
          }
        ],
        enableBackdropDismiss: false
      });
      confirm.present();
    });
    return observable$;
  }
  
}