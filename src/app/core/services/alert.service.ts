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
  
  showSuccessAlert(title, ms=2000) {
    let alert = this.alertCtrl.create({
      title,
      enableBackdropDismiss: false
    });
    alert.present();
    setTimeout(() => alert.dismiss(), ms);
  }
  
  showSuccessDeleteAlert(title, subTitle, ms=2000) {
    let alert = this.alertCtrl.create({
      title,
      subTitle,
      enableBackdropDismiss: false
    });
    alert.present();
    setTimeout(() => alert.dismiss(), ms);
  }
  
  showLeaveConfirmAlert() {
    let observable$ = Observable.create(observer => {
      let confirm = this.alertCtrl.create({
        title: 'Are you sure you want to leave?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              observer.next(false);
              observer.complete();
            }
          },
          {
            text: 'Yes',
            handler: () => {
              observer.next(true);
              observer.complete();
            }
          }
        ],
        enableBackdropDismiss: false
      });
      confirm.present();
    });
    return observable$.toPromise();
  }
  
  showDeadlineFailsAlert(title, ms=2000) {
    let alert = this.alertCtrl.create({
      title,
      enableBackdropDismiss: false
    });
    alert.present();
    setTimeout(() => alert.dismiss(), ms);
  }
  
  showFinishVotingAlert(question) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to finish voting?',
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
            this.questionsService.questionFinishVoting(question);
          }
        }
      ],
      enableBackdropDismiss: false
    });
    confirm.present();
  }
  
}