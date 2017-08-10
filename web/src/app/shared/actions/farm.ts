import { Action } from '@ngrx/store';
import { Farm } from '../datatypes';

export const SEARCH = '[Book] Search';
export const SEARCH_COMPLETE = '[Book] Search Complete';
export const LOAD = '[Book] Load';
export const SELECT = '[Book] Select';


export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Book[]) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Book) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;