import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ClientService } from '../services';
import * as clientActions from '../actions/client';
import { PayloadAction, Section, Post, Tag } from '../datatypes';

@Injectable()
export class ClientEffects {
  @Effect()
  selectSections$: Observable<Action> = this.actions$
    .ofType(clientActions.SELECT_SECTIONS)
    .pipe(
      switchMap(() => {

        return this.clientService.getSections()
          .map(sections => new clientActions.SelectSectionsCompleteAction(sections))
          .catch(() => of(new clientActions.SelectSectionsFailAction(null)));
      })
    );

  @Effect()
  selectSection$: Observable<Action> = this.actions$
    .ofType(clientActions.SELECT_SECTION)
    .pipe(
      map((action: PayloadAction) => action.payload),
      switchMap(query => {
        if (query === '') {
          return empty();
        }

        return this.clientService.getSection(query)
          .map(section => new clientActions.SelectSectionCompleteAction(section))
          .catch(() => of(new clientActions.SelectSectionFailAction(null)));
      })
    );

  @Effect()
  createSection$: Observable<Action> = this.actions$
    .ofType(clientActions.CREATE_SECTION)
    .pipe(
      map((action: PayloadAction) => action.payload),
      switchMap((section: Section) => {
        if (!section) {
          return empty();
        }

        return this.clientService.createSection(section)
          .map(newSection => new clientActions.CreateSectionCompleteAction(newSection))
          .catch(() => of(new clientActions.CreateSectionFailAction(null)));
      })
    );

    constructor(private actions$: Actions, private clientService: ClientService) { }
}
