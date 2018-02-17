import { Action } from '@ngrx/store';
import { Section, Post, Tag } from '../datatypes';

export const SELECT_SECTION = '[Section] Select';
export const SELECT_SECTION_COMPLETE = '[Section] Select Complete';
export const SELECT_SECTION_FAIL = '[Section] Select Fail';

export const CREATE_SECTION = '[Section] Create';
export const CREATE_SECTION_COMPLETE = '[Section] Create Complete';
export const CREATE_SECTION_FAIL = '[Section] Create Fail';

export const SELECT_POST = '[Post] Select';
export const SELECT_POST_COMPLETE = '[Post] Select Complete';
export const SELECT_POST_FAIL = '[Post] Select Fail';


export class SelectSectionAction implements Action {
  readonly type = SELECT_SECTION;

  constructor(public payload: string) { }
}

export class SelectSectionCompleteAction implements Action {
  readonly type = SELECT_SECTION_COMPLETE;

  constructor(public payload: Section) { }
}

export class SelectSectionFailAction implements Action {
  readonly type = SELECT_SECTION_FAIL;

  constructor(public payload: void) { }
}

export class CreateSectionAction implements Action {
  readonly type = CREATE_SECTION;

  constructor(public payload: Section) { }
}

export class CreateSectionCompleteAction implements Action {
  readonly type = CREATE_SECTION_COMPLETE;

  constructor(public payload: Section) { }
}

export class CreateSectionFailAction implements Action {
  readonly type = CREATE_SECTION_FAIL;

  constructor(public payload: {}) { }
}

export class SelectPostAction implements Action {
  readonly type = SELECT_POST;

  constructor(public payload: string) { }
}

export class SelectPostCompleteAction implements Action {
  readonly type = SELECT_POST_COMPLETE;

  constructor(public payload: Post) { }
}

export class SelectPostFailAction implements Action {
  readonly type = SELECT_POST_FAIL;

  constructor(public payload: void) { }
}

export type ClientActions
  = SelectSectionAction
  | SelectSectionCompleteAction
  | SelectSectionFailAction
  | CreateSectionAction
  | CreateSectionCompleteAction
  | CreateSectionFailAction
  | SelectPostAction
  | SelectPostCompleteAction
  | SelectPostFailAction;
