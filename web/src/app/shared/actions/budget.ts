import { Action } from '@ngrx/store';
import { Budget } from '../datatypes';

export const CREATE = '[Budget] Create';
export const CREATE_COMPLETE = '[Budget] Create Complete';
export const CREATE_FAIL = '[Budget] Create Fail';

export const UPDATE = '[Budget] Update';
export const UPDATE_COMPLETE = '[Budget] Update Complete';
export const UPDATE_FAIL = '[Budget] Update Fail';

export const DELETE = '[Budget] Delete';
export const DELETE_COMPLETE = '[Budget] Delete Complete';
export const DELETE_FAIL = '[Budget] Delete Fail';


export class CreateAction implements Action {
  readonly type = CREATE;

  constructor(public payload: Budget) { }
}

export class CreateCompleteAction implements Action {
  readonly type = CREATE_COMPLETE;

  constructor(public payload: Budget) { }
}

export class UpdateAction implements Action {
  readonly type = UPDATE;

  constructor(public payload: Budget) { }
}

export class UpdateCompleteAction implements Action {
  readonly type = UPDATE_COMPLETE;

  constructor(public payload: Budget) { }
}

export class DeleteAction implements Action {
  readonly type = DELETE;

  constructor(public payload: string) { }
}

export class DeleteCompleteAction implements Action {
  readonly type = DELETE_COMPLETE;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BudgetActions
  = UpdateAction
  | UpdateCompleteAction
  | CreateAction
  | CreateCompleteAction
  | DeleteAction
  | DeleteCompleteAction;
