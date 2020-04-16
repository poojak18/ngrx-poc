

import { CustomerActionTypes} from './customer.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
export const initialState = [];
export function CustomerReducer(state = initialState, action) {
  switch (action.type) {
    case CustomerActionTypes.Add:
      return [...state, action.payload];
    case CustomerActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
      case CustomerActionTypes.Update:
            const index  = action.index;
            return [
                ...state.slice(0, index),
                Object.assign({}, state[index], action.payload),
                ...state.slice(index + 1)
            ];
    default:
      return state;
  }
}