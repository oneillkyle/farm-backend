import * as stateActions from '../actions/farm';
import { Farm } from '../datatypes';

export class State {
  farms: Farm[]
  farm: Farm
}

const initialState: State = {
  farms: null,
  farm: null
};

export function reducer(state = initialState, action: stateActions.Actions): State {
  switch (action.type) {
    case stateActions.SEARCH_COMPLETE:
      return Object.assign(state, {
        farms: action.payload,
      });

    default:
      return state;
  }
}
