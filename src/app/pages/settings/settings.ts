import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'settings'
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public settings: any;

  constructor(
      public navCtrl: NavController
  ) {

    this.settings = [
      { label: 'Send daily emails', description: 'Emails about daily activity', value: false },
      { label: 'Send push notifications', description: '', value: true }
    ];
  }

  saveSettigns(event) {
    console.log('settings saved');
  }

}
