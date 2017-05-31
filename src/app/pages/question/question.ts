import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { OptionsService } from '../../core/services/options.service';

import { IAppState } from '../../ngrx/state/app.state';
import { Observable } from 'rxjs';

@IonicPage({
  name: 'question',
})
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  
  public action;
  public question;
  public deadline;
  public currentOptions$;
  public resolver$;
  
  constructor(public store: Store<IAppState>,
              public navParams: NavParams,
              public optionsService: OptionsService) {
    this.action = navParams.get('action');
    this.question = navParams.get('question');
  
    //this.resolver$ = Observable.of(true)
    //.delay(2000)
    //.toPromise();
  }
  
  //ionViewCanEnter() {
  //  return this.resolver$
  //  .then((res) => res);
  //}

  ngOnInit() {
    console.log(this.question);
    this.deadline = new Date(new Date(this.question.createdAt).getTime() + this.question.ttl*1000);
    this.optionsService.getQuestionOptions(this.question.id);
    this.currentOptions$ = this.optionsService.currentOptions$;
  }
}
