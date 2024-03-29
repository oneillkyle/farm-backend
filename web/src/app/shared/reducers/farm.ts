import * as farmActions from '../actions/farm';
import * as budgetActions from '../actions/budget';
import { Farm } from '../datatypes';
import { remove } from 'lodash';

export class State {
  farms: Farm[]
  farm: Farm
}

const initialState: State = {
  farms: null,
  farm: null
};

export function reducer(state = initialState, action: farmActions.FarmActions | budgetActions.BudgetActions): State {
  switch (action.type) {
    case farmActions.SEARCH_COMPLETE: {
      return Object.assign(state, {
        farms: action.payload,
      });
    }

    case farmActions.SELECT_COMPLETE: {
      return Object.assign(state, {
        farm: action.payload,
      });
    }

    case budgetActions.CREATE_COMPLETE: {
      const newState =  Object.assign({}, state);
      newState.farm.budgets.push(action.payload);
      return newState;
    }

    case budgetActions.UPDATE_COMPLETE: {
      const newState =  Object.assign({}, state);
      const index = newState.farm.budgets.findIndex((budget) => budget.id === action.payload.id);
      newState.farm.budgets.splice(index, 1, action.payload);
      return newState;
    }

    case budgetActions.DELETE_COMPLETE: {
      const newState =  Object.assign({}, state);
      newState.farm.budgets = [...newState.farm.budgets.filter(budget => budget.id !== action.payload)];
      return newState;
    }

    default: {
      return state;
    }
  }
}
