import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';


@Injectable()
export class GroupsGetEffects {
  
  constructor(private actions$: Actions) {
  }
}
