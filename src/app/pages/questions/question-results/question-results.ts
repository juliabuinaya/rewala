import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { LoadingService } from '../../../core/services/loading.service';
import { ResultsService } from '../../../core/services/results.service';

import { Chart } from 'chart.js';
import * as _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-question-results',
  templateUrl: 'question-results.html'
})
export class QuestionResultsPage {
  
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('barCanvas') barCanvas;
  public question;
  public results$;
  public resultsRequestGetLoadedState$;
  public resultsResolver;
  public resultsSubscriber;
  
  public results;
  public maxQuantity;
  public optimalResults;
  public doughnutChart;
  public barChart;
  public resultsLabels;
  public resultsQuantities;
  public chartDataset;
  public colors;
  public barChartActive = true;
  public pieChartActive = false;
  
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
  
  ngOnInit() {
    this.results$ = this.resultsService.results$;
    this.resultsSubscriber = this.results$
    .subscribe(results => this.results = results);
    this.loadingService.hideSpinner();
    
    this.maxQuantity = _.get(_.maxBy(this.results, 'quantity'), 'quantity');
    this.optimalResults = _.filter(this.results, ['quantity', this.maxQuantity]);
    
    this.resultsLabels = this.results.map(result => result.text);
    this.resultsQuantities = this.results.map(result => result.quantity);
    
    this.colors = [
      'rgba(56,142,60, 0.7)',
      'rgba(54,162,235, 0.7)',
      'rgba(245,124,0, 0.7)',
      'rgba(255,206,86, 0.7)',
      'rgba(211,47,47, 0.7)',
      'rgba(153,102,255, 0.7)',
      'rgba(75,192,192, 0.7)',
      'rgba(81,45,168, 0.7)',
      'rgba(255,99,132, 0.7)',
      'rgba(93,64,55, 0.7)',
      'rgba(69,90,100, 0.7)',
      'rgba(255,159,64, 0.7)',
      'rgba(175,180,43, 0.7)',
    ];
    this.chartDataset = {
      labels: this.resultsLabels,
      datasets: [{
        labels: this.resultsLabels,
        data: this.resultsQuantities,
        backgroundColor: this.colors,
      }]
    };
  
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: this.chartDataset,
      options: {
        legend: {
          onClick: false,
          position: 'bottom'
        }
      }
    });
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: this.chartDataset,
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 90
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 10,
              callback: function (tick, index, ticks) {
                if (tick.toString().indexOf('.') !== -1) {
                  return null;
                }
                return tick.toLocaleString();
              }
            }
          }],
        }
      }
    });
    
  }
  
  showPieChart() {
    this.barChartActive = false;
    this.pieChartActive = true;
  }

  showBarChart() {
    this.pieChartActive = false;
    this.barChartActive = true;
  }
  
  ngOnDestroy() {
    this.resultsSubscriber.unsubscribe();
  }
  
}
