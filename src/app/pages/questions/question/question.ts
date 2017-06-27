import { Component } from '@angular/core';
import { AlertController, IonicPage, NavParams } from 'ionic-angular';

import { OptionsService } from '../../../core/services/options.service';
import { QuestionsService } from '../../../core/services/questions.service';
import { LoadingService } from '../../../core/services/loading.service';
import { AnswersService } from '../../../core/services/answers.service';
import { UserService } from '../../../core/services/user.service';
import { RoutingService } from '../../../core/services/routing.service';

import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  name: 'question',
})
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  
  public question;
  public questionType;
  public action;
  public questionTypes;
  public optionType;
  public checkedOptions = [];
  public checkedOptionsIds = [];
  public selectedOptionId;
  public deadline;
  public currentOptions$;
  public optionsRequestGetLoadedState$;
  public optionsResolver;
  public userId$;
  public userIdSubscriber;
  public userId;
  public myAnswers$;
  public currentAnswersIds;
  public currentAnswersIdsSubscriber;
  public answeredOptions$;
  public voteChanging = false;

  constructor(public navParams: NavParams,
              public optionsService: OptionsService,
              public questionsService: QuestionsService,
              public answersService: AnswersService,
              public userService: UserService,
              public loadingService: LoadingService,
              public routingService: RoutingService,
              public alertCtrl: AlertController) {
    
    this.question = navParams.get('question');
    this.questionType = navParams.get('questionType');
    this.action = navParams.get('action');
    this.optionsService.getQuestionOptions(this.question.id);
    this.optionsRequestGetLoadedState$ = this.optionsService.optionsRequestGetLoadedState$;
    this.optionsResolver = this.optionsRequestGetLoadedState$
    .skipWhile(loaded => !loaded)
    .take(1)
    .toPromise();
    this.userId$ = this.userService.userId$;
    this.userIdSubscriber =  this.userId$
    .subscribe(id => this.userId = id);
  }
  
  ionViewCanEnter() {
    return this.optionsResolver.then(loaded => loaded);
  }

  ngOnInit() {
    this.loadingService.hideSpinner();
    this.deadline = new Date(new Date(this.question.createdAt).getTime() + this.question.ttl*1000);
    this.myAnswers$ = this.answersService.myAnswers$;
    this.currentOptions$ = this.optionsService.currentOptions$;
    
    this.answeredOptions$ = Observable.combineLatest(this.myAnswers$, this.currentOptions$)
    .map(([answers, currentOptions]) => [
      _.map(answers, (answer: any) => answer.questionOptionId),
      currentOptions
    ])
    .map(([answersIds, currentOptions]: any) =>
      _.filter(currentOptions, ({id}: any) =>
        _.indexOf(answersIds, id) != -1
      )
    );
    
    this.questionTypes = this.questionsService.questionTypes;
    this.optionType = _.find(this.questionTypes, ['id', this.question.questionTypeId]);
    
    this.currentAnswersIdsSubscriber = Observable.combineLatest(this.answeredOptions$, this.myAnswers$)
    .map(([options, answers]) => [
      _.map(options, (option: any) => option.id),
      answers
    ])
    .map(([optionsIds, answers]: any) =>
      _.filter(answers, ({questionOptionId}: any) =>
        _.indexOf(optionsIds, questionOptionId) != -1
      )
    )
    .map(answers => _.map(answers, (answer: any) => answer.id))
    .subscribe(answersIds => this.currentAnswersIds = answersIds);
  }
  
  onOptionChange() {
    this.checkedOptionsIds = _.keys(_.pickBy(this.checkedOptions));
  }
  
  onOptionSelect(option) {
    this.selectedOptionId = option.id;
  }
  
  deleteQuestion(question) {
    this.questionsService.deleteQuestion(question.id);
  }
  
  getChosenOptionsIds() {
    let optionsIds;
    this.selectedOptionId ? optionsIds = [this.selectedOptionId] : optionsIds = this.checkedOptionsIds;
    return optionsIds;
  }
  
  vote() {
    this.answersService.createAnswer(this.userId, this.getChosenOptionsIds());
  }
  
  changeVote() {
    this.voteChanging = true;
  }
  
  cancelVoteChange() {
    this.routingService.popPage();
  }
  
  confirmVoteChange() {
    this.answersService.changeAnswer(this.userId, this.currentAnswersIds, this.getChosenOptionsIds());
  }
  
  showDeleteAlert(question) {
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
            this.deleteQuestion(question);
          }
        }
      ]
    });
    confirm.present();
  }
  
  showChangeVoteAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to change your vote?',
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
            this.changeVote();
          }
        }
      ]
    });
    confirm.present();
  }
  
  ngOnDestroy() {
    this.userIdSubscriber.unsubscribe();
    this.currentAnswersIdsSubscriber.unsubscribe();
  }
}
