import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'settings'
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  
  public settings: any;
  public currentPageName;

  constructor() {
    this.settings = [
      { label: 'Send daily emails', description: 'Emails about daily activity', value: false },
      { label: 'Send push notifications', description: '', value: true }
    ];
  }
  
  ionViewWillEnter() {
    this.currentPageName = this.constructor.name;
  }

  saveSettigns(event) {
    console.log('settings saved');
  }

}
