import { Action } from '@ngrx/store';
import { Log } from '../datatypes';

export const SUCCESS = '[Log] Success';
export const ERROR = '[Log] Error';


export class SuccessAction implements Action {
  readonly type = SUCCESS;

  constructor(public payload: Log) { }
}

export class ErrorAction implements Action {
  readonly type = ERROR;

  constructor(public payload: Log) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type LogActions
  = SuccessAction
  | ErrorAction;
