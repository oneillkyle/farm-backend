import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';

import * as farm from './farm';

export interface AppState {
  farm: farm.State
}

export const reducers: ActionReducerMap<AppState> = {
  farm: farm.reducer
}

export const getFarms = (state: AppState) => state.farm.farms

export const getFarm = (state: AppState) => state.farm.farm;