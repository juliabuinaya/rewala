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

import { APP_SERVICE_PROVIDERS } from './services/index';
import { SessionService } from './services/session.service';

// effects
import { AuthEffects } from '../ngrx/auth/effects';
import { RegistrationPostEffects } from '../ngrx/auth-request/effects';
import { SessionPostEffects } from '../ngrx/auth-request/effects';
import { UserRequestEffects } from '../ngrx/user-request/effects';
import { UserEffects } from '../ngrx/user/effects';
import { SpinnerEffects } from '../ngrx/spinner/effects';
import { GroupsEffects } from '../ngrx/groups/effects/groups.effect';
import { GroupsGetEffects } from '../ngrx/groups-request/nested-states/groups-get/effects/groups-get.effect';
import { GroupPostEffects } from '../ngrx/groups-request/nested-states/group-post/effects/group-post.effect';
import { QuestionPostEffects } from '../ngrx/questions-request/nested-states/question-post/effects/question-post.effect';
import { ContactsEffects } from '../ngrx/contacts/effects/contacts.effect';
import { ContactsRequestEffects } from '../ngrx/contacts-request/effects/contacts-request.effect';
import { OptionsPostEffects } from '../ngrx/options-request/nested-states/options-post/effects/options-post.effect';
import { MyQuestionsGetEffects } from '../ngrx/questions-request/nested-states/my-questions-get/effects/my-questions-get.effect';
import { QuestionsEffects } from '../ngrx/questions/effects/questions.effect';
import { OptionsGetEffects } from '../ngrx/options-request/nested-states/options-get/effects/options-get.effect';
import { OptionsEffects } from '../ngrx/options/effects/options.effect';
import { AwaitingQuestionsGetEffects } from '../ngrx/questions-request/nested-states/awaiting-questions-get/effects/awaiting-questions-get.effect';
import { AnswerPostEffects } from '../ngrx/answers-request/nested-states/answer-post/effects/answer-post.effect';
import { MyAnswersGetEffects } from '../ngrx/answers-request/nested-states/my-answers-get/effects/my-answers-get.effect';
import { AnswersEffects } from '../ngrx/answers/effects/answers.effect';
import { VoiceGivenQuestionsGetEffects } from '../ngrx/questions-request/nested-states/voice-given-questions-get/effects/voice-given-questions-get.effect';

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
     EffectsModule.run(GroupPostEffects),
     EffectsModule.run(QuestionPostEffects),
     EffectsModule.run(MyQuestionsGetEffects),
     EffectsModule.run(QuestionsEffects),
     EffectsModule.run(OptionsPostEffects),
     EffectsModule.run(ContactsEffects),
     EffectsModule.run(ContactsRequestEffects),
     EffectsModule.run(OptionsGetEffects),
     EffectsModule.run(OptionsEffects),
     EffectsModule.run(AwaitingQuestionsGetEffects),
     EffectsModule.run(AnswerPostEffects),
     EffectsModule.run(AnswersEffects),
     EffectsModule.run(MyAnswersGetEffects),
     EffectsModule.run(VoiceGivenQuestionsGetEffects),
  
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