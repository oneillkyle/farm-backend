import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';

import { Log } from '../datatypes';
import * as farm from './farm';
import * as log from './log';
import { get } from 'lodash';

export interface AppState {
  farm: farm.State,
  log: Log
}

export const reducers: ActionReducerMap<AppState> = {
  farm: farm.reducer,
  log: log.reducer
}

export const getFarms = (state: AppState) => state.farm.farms

export const getFarm = (state: AppState) => state.farm.farm
export const getLog = (state: AppState) => state.log

export const getBudgets = (state: AppState) => {
  return get(state, 'farm.farm.budgets', []);
}

