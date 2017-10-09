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

import { FarmService } from '../services';
import * as farmActions from '../actions/farm';

@Injectable()
export class FarmEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(farmActions.SEARCH)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      return this.farmService.getFarms()
        .map(farms => new farmActions.SearchCompleteAction(farms))
        .catch(() => of(new farmActions.SearchCompleteAction([])));
    });

    @Effect()
    select$: Observable<Action> = this.actions$
      .ofType(farmActions.SELECT)
      .map(toPayload)
      .switchMap(query => {
        if (query === '') {
          return empty();
        }

        return this.farmService.getFarm(query)
          .map(farm => new farmActions.SelectCompleteAction(farm))
          .catch(() => of(new farmActions.SelectCompleteAction(null)));
      });

    constructor(private actions$: Actions, private farmService: FarmService) { }
}
