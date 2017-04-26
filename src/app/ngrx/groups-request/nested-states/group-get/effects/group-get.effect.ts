import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as groupsGet from '../actions/group-get.actions';
import * as groups from '../../../../groups/actions/index';
import {
  GroupGetAction, GroupGetFailAction, GroupGetSuccessAction
} from '../actions/index';

import { MyGroupGetSuccessAction } from '../actions/group-get.actions';


@Injectable()
export class GroupGetEffects {
  
  constructor(private actions$: Actions) {
  }
  
}
