/* tslint:disable:member-ordering no-unused-variable */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Storage } from '@ionic/storage';

import { AppReducer } from '../ngrx/state/app.state';

import { APP_CONFIG, APP_DI_CONFIG, RESTANGULAR_CONFIG, SOCIAL_AUTH_CONFIG } from '../app.config';
import { RestangularModule } from 'ng2-restangular';
import { Ng2UiAuthModule } from 'ng2-ui-auth';

// resolver
import { APP_SERVICE_PROVIDERS, SpinnerService } from './services/index';


export function provideStorage() {
  return new Storage({});
  // return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' } /* optional config */);
}



@NgModule({
  imports: [
    HttpModule,

    StoreModule.provideStore(AppReducer),
    // EffectsModule.run(AuthEffects),
    RestangularModule.forRoot(
      [
        SpinnerService
      ],
      RESTANGULAR_CONFIG
    ),
    Ng2UiAuthModule.forRoot(SOCIAL_AUTH_CONFIG)
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