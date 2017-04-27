import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../ngrx/state/app.state';


//actions

@Injectable()
export class CreateQuestionService {
  
  constructor(public store: Store<IAppState>) {
  }

}