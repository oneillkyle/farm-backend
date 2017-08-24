import { Action } from '@ngrx/store';
import { Farm } from '../datatypes';

export const SEARCH = '[Farm] Search';
export const SEARCH_COMPLETE = '[Farm] Search Complete';
export const SELECT = '[Farm] Select';
export const SELECT_COMPLETE = '[Farm] Select Complete';


export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: void) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Farm[]) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export class SelectCompleteAction implements Action {
  readonly type = SELECT_COMPLETE;

  constructor(public payload: Farm) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | SelectAction
  | SelectCompleteAction;
