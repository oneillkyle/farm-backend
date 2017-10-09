import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { BudgetService } from '../services';
import * as budgetActions from '../actions/budget';
import * as logActions from '../actions/log';

@Injectable()
export class BudgetEffects {

    @Effect()
    create$: Observable<Action> = this.actions$
      .ofType(budgetActions.CREATE)
      .map(toPayload)
      .switchMap(budget => {
        console.log(budget);
        if (!budget) {
          return empty();
        }

        return this.budgetService.createBudget(budget)
          .map(farm => new budgetActions.CreateCompleteAction(budget))
          .catch(() => of(new logActions.ErrorAction({error: true})));
      });

    constructor(private actions$: Actions, private budgetService: BudgetService) { }
}
