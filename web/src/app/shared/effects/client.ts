import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable ,  EMPTY as empty ,  of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ClientService } from '../services';
import * as clientActions from '../actions/client';
import * as logActions from '../actions/log';
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
          .catch(() => of(new logActions.ErrorAction({error: true})));
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
          .catch(() => of(new logActions.ErrorAction({error: true})));
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
          .catch(() => of(new logActions.ErrorAction({error: true})));
      })
    );

  @Effect()
  updateSection$: Observable<Action> = this.actions$
    .ofType(clientActions.UPDATE_SECTION)
    .pipe(
      map((action: PayloadAction) => action.payload),
      switchMap((section: Section) => {
        if (!section) {
          return empty();
        }

        return this.clientService.updateSection(section)
          .map(newSection => new clientActions.UpdateSectionCompleteAction(newSection))
          .catch(() => of(new logActions.ErrorAction({error: true})));
      })
    );

  @Effect()
  selectPosts$: Observable<Action> = this.actions$
    .ofType(clientActions.SELECT_POSTS)
    .pipe(
      map((action: PayloadAction) => action.payload),
      switchMap((title: string) => {

        return this.clientService.getAllSectionPosts(title)
          .map(posts => new clientActions.SelectPostsCompleteAction(posts))
          .catch(() => of(new logActions.ErrorAction({error: true})));
      })
    );

    constructor(private actions$: Actions, private clientService: ClientService) { }
}
