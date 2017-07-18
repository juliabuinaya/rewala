import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';

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
  public user$;

  constructor(public authService: AuthService,
              public userService: UserService) {
    this.user$ = this.userService.user$;
    this.settings = [
      { label: 'Send daily emails', description: 'Emails about daily activity', value: false },
      { label: 'Send push notifications', description: '', value: true }
    ];
  }
  
  ionViewWillEnter() {
    this.currentPageName = 'SettingsPage';
  }

  saveSettigns(event) {
    console.log('settings saved');
  }
  
  logout() {
    this.authService.logout();
  }

}
