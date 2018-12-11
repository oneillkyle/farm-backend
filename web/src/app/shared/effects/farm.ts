import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable ,  EMPTY as empty ,  of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { FarmService } from '../services';
import * as farmActions from '../actions/farm';
import { PayloadAction } from '../datatypes';

@Injectable()
export class FarmEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(farmActions.SEARCH)
    .pipe(
      map((action: PayloadAction) => action.payload),
      switchMap(query => {
        if (query === '') {
          return empty();
        }

        return this.farmService.getFarms()
          .map(farms => new farmActions.SearchCompleteAction(farms))
          .catch(() => of(new farmActions.SearchCompleteAction([])));
      })
    );

    @Effect()
    select$: Observable<Action> = this.actions$
      .ofType(farmActions.SELECT)
      .pipe(
        map((action: PayloadAction) => action.payload),
        switchMap(query => {
          if (query === '') {
            return empty();
          }

          return this.farmService.getFarm(query)
            .map(farm => new farmActions.SelectCompleteAction(farm))
            .catch(() => of(new farmActions.SelectCompleteAction(null)));
        })
      );

    constructor(private actions$: Actions, private farmService: FarmService) { }
}
