import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'questions-list',
})
@Component({
  selector: 'page-questions-list',
  templateUrl: 'questions-list.html'
})
export class QuestionsListPage {
  
  public props;

  constructor(public navParams: NavParams) {
    
    this.props = navParams.get('props');

  }

  ngOnInit() {
    
  }
}
