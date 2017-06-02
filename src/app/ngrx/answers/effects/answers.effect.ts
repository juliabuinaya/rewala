import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

//actions


@Injectable()
export class AnswersEffects {
  
  constructor(private actions$: Actions) {
  }
  
}
