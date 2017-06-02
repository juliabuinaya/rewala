import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as groupsGet from '../actions/answer-get.actions';
import * as groups from '../../../../groups/actions/index';


@Injectable()
export class AnswerGetEffects {
  
  constructor(private actions$: Actions) {
  }
  
}
