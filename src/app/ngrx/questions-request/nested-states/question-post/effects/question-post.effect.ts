import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';


@Injectable()
export class QuestionPostEffects {
  
  constructor(private actions$: Actions) {
  }
  
}
