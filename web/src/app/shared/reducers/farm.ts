import * as stateActions from '../actions/farm';
import { Farm } from '../datatypes';

const initialState: Farm = {
  name: null,
  id: null
};

export function reducer(state = initialState, action: stateActions.Actions): Farm {
  switch (action.type) {
    case stateActions.LOAD:
      return Object.assign(state, {
        name: action.payload,
      });

    default:
      return state;
  }
}

export const getName = (state: Farm) => state.name;