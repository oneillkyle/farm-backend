import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable ,  EMPTY as empty ,  of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { BudgetService } from '../services';
import * as budgetActions from '../actions/budget';
import * as logActions from '../actions/log';
import { PayloadAction } from '../datatypes';

@Injectable()
export class BudgetEffects {

    @Effect()
    create$: Observable<Action> = this.actions$
      .ofType(budgetActions.CREATE)
      .pipe(
        map((action: PayloadAction) => action.payload),
        switchMap(budget => {
          if (!budget) {
            return empty();
          }

          return this.budgetService.createBudget(budget)
            .map(response => new budgetActions.CreateCompleteAction(response))
            .catch(() => of(new logActions.ErrorAction({error: true})));
        })
      );

      @Effect()
      delete$: Observable<Action> = this.actions$
        .ofType(budgetActions.DELETE)
        .pipe(
          map((action: PayloadAction) => action.payload),
          switchMap(budgetId => {
            if (!budgetId) {
              return empty();
            }

            return this.budgetService.deleteBudget(budgetId)
              .map(response => new budgetActions.DeleteCompleteAction(response))
              .catch(() => of(new logActions.ErrorAction({error: true})));
          })
        );

        @Effect()
        update$: Observable<Action> = this.actions$
          .ofType(budgetActions.UPDATE)
          .pipe(
            map((action: PayloadAction) => action.payload),
            switchMap(budget => {
              if (!budget) {
                return empty();
              }
              return this.budgetService.updateBudget(budget)
                .map(response => new budgetActions.UpdateCompleteAction(response))
                .catch(() => of(new logActions.ErrorAction({error: true})));
            })
          );

    constructor(private actions$: Actions, private budgetService: BudgetService) { }
}
