import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Chart } from 'chart.js';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-question-results',
  templateUrl: 'question-results.html'
})
export class QuestionResultsPage {
  
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  public results;
  public optimalChoice;
  public barChart;
  public doughnutChart;
  public resultsLabels;
  public resultsQuantities;
  public chartDataset;
  public colors;
  public chartSwitched = false;
  
  
  constructor() {
  }
  
  ngOnInit() {
    this.results =
      [
        {
          text: 'Tequila',
          quantity: 5
        },
        {
          text: 'Vodka',
          quantity: 2
        },
        {
          text: 'Jin',
          quantity: 4
        },
        {
          text: 'Whisky',
          quantity: 7
        },
        {
          text: 'Rum',
          quantity: 3
        }
      ];
    
    this.optimalChoice = _.maxBy(this.results, 'quantity');
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
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: this.chartDataset,
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    
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
  }
  
  onSwitchChart() {
    this.chartSwitched = !this.chartSwitched;
  }
}