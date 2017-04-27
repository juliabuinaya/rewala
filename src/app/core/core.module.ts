/* tslint:disable:member-ordering no-unused-variable */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { AppReducer } from '../ngrx/state/app.state';

import { APP_CONFIG, APP_DI_CONFIG, RESTANGULAR_CONFIG, SOCIAL_AUTH_CONFIG } from '../app.config';
import { RestangularModule } from 'ngx-restangular';
import { Ng2UiAuthModule } from 'ng2-ui-auth';

import { APP_SERVICE_PROVIDERS, SpinnerService } from './services/index';
import { SessionService } from './services/session.service';

// effects
import { AuthEffects } from '../ngrx/auth/effects';
import { RegistrationPostEffects } from '../ngrx/auth-request/effects';
import { SessionPostEffects } from '../ngrx/auth-request/effects';
import { UserRequestEffects } from '../ngrx/user-request/effects';
import { UserEffects } from '../ngrx/user/effects';
import { SpinnerEffects } from '../ngrx/spinner/effects';
import { GroupsGetEffects } from '../ngrx/groups-request/nested-states/groups-get/effects/groups-get.effect';
import { GroupsEffects } from '../ngrx/groups/effects/groups.effect';

export function provideStorage() {
  return new Storage({});
  // return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' } /* optional config */);
}


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b0c8daf4'
  },
  'auth': {
    'google': {
      'webClientId': '1064527119572-evvvtkqe7q9u7sk8nod083bp3gnuvi7f.apps.googleusercontent.com',
      'scope': []
    }
  }
};


@NgModule({
  imports: [
    HttpModule,

    StoreModule.provideStore(AppReducer),
     EffectsModule.run(AuthEffects),
     EffectsModule.run(RegistrationPostEffects),
     EffectsModule.run(SessionPostEffects),
     EffectsModule.run(UserRequestEffects),
     EffectsModule.run(UserEffects),
     EffectsModule.run(SpinnerEffects),
     EffectsModule.run(GroupsGetEffects),
     EffectsModule.run(GroupsEffects),
    
    RestangularModule.forRoot(
      [
        ToastController,
        SessionService
      ],
      RESTANGULAR_CONFIG
    ),
    Ng2UiAuthModule.forRoot(SOCIAL_AUTH_CONFIG),
    CloudModule.forRoot(cloudSettings),
  ],
  declarations: [],
  providers: [
    { provide: Storage, useFactory: provideStorage },
    // app config
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },

    ...APP_SERVICE_PROVIDERS,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */