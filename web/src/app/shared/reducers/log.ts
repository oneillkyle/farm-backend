import * as stateActions from '../actions/log';
import { Log } from '../datatypes';

const initialState: Log = {};

export function reducer(state = initialState, action: stateActions.LogActions): Log {
  switch (action.type) {
    case stateActions.ERROR:
    case stateActions.SUCCESS:
      return Object.assign(state, action.payload);

    default:
      return state;
  }
}
