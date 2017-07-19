import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { LoadingService } from '../../../core/services/loading.service';
import { ResultsService } from '../../../core/services/results.service';

import { Chart } from 'chart.js';
import * as _ from 'lodash';

import * as Highcharts from 'highcharts';

@IonicPage()
@Component({
  selector: 'page-question-results',
  templateUrl: 'question-results.html'
})
export class QuestionResultsPage {
  
  public question;
  public results$;
  public resultsRequestGetLoadedState$;
  public resultsResolver;
  public resultsSubscriber;
  
  public results;
  public maxQuantity;
  public optimalResults;
  public highChartData;
  public chartDataset;
  public colors;
  
  constructor(public loadingService: LoadingService,
              public navParams: NavParams,
              public resultsService: ResultsService) {
    this.question = navParams.get('question');
    this.resultsService.getQuestionResults(this.question.id);
    this.resultsRequestGetLoadedState$ = this.resultsService.resultsRequestGetLoadedState$;
    this.resultsResolver = this.resultsRequestGetLoadedState$
    .skipWhile(loaded => !loaded)
    .take(1)
    .toPromise();
  }
  
  ionViewCanEnter() {
    return this.resultsResolver.then(loaded => loaded);
  }
  
  ionViewDidLoad() {
    this.results$ = this.resultsService.results$;
    this.resultsSubscriber = this.results$
    .subscribe(results => this.results = results);
    this.loadingService.hideSpinner();
  
    this.maxQuantity = _.get(_.maxBy(this.results, 'quantity'), 'quantity');
    this.optimalResults = _.filter(this.results, ['quantity', this.maxQuantity]);
  
    this.highChartData = this.results.map(result => {
      return {
        name: result.text,
        y: result.quantity
      }
    });
    
    Highcharts.chart('highchart', {
      chart: {
        type: 'column'
      },
      credits: {
        enabled : false
      },
      title: {
        text: this.question.text,
        style: {
          fontSize: '22px',
          fontWeight: 'bold'
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -75,
          style: {
            fontSize: '15px'
          }
        }
      },
      yAxis: {
        min: 0,
        allowDecimals: false,
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Votes: <b>{point.y}</b>',
        style: {
          fontSize: '10px'
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.highChartData
      }]
    });
    
  }
  
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.resultsSubscriber.unsubscribe();
  }
  
}
