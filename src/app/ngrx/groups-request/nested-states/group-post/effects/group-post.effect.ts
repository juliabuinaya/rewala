import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';


import * as groupsGet from '../actions/group-post.actions';
import * as groups from '../../../../groups/actions/index';
import { GroupPostAction, GroupPostFailAction, GroupPostSuccessAction } from '../actions/index';


@Injectable()
export class GroupPostEffects {
  
  constructor(private actions$: Actions) {
  }
  
}
