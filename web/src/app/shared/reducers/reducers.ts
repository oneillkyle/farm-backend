import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';

import { Log } from '../datatypes';
import * as farm from './farm';
import * as client from './client';
import * as log from './log';
import { get } from 'lodash';

export interface AppState {
  farm: farm.State,
  client: client.State
  log: Log
}

export const reducers: ActionReducerMap<AppState> = {
  farm: farm.reducer,
  client: client.reducer,
  log: log.reducer
}

export const getFarms = (state: AppState) => state.farm.farms

export const getFarm = (state: AppState) => state.farm.farm
export const getLog = (state: AppState) => state.log
export const getClient = (state: AppState) => state.client

export const getBudgets = (state: AppState) => {
  return get(state, 'farm.farm.budgets', []);
}

