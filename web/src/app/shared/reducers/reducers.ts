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
