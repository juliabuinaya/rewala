import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs';


@Injectable()
export class AnswerPostEffects {
  
  constructor(private actions$: Actions) {
  }
  
}