

import {Action} from '@ngrx/store';
import { Customer } from './models/customer';
export enum CustomerActionTypes {
  Add = '[Customer Component] Add',
  Remove = '[Customer Component] Remove',
  Update = '[Customer Component] Update'
}

export class CustomerAdd implements Action {
  readonly type = CustomerActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class CustomerRemove implements Action {
  readonly type = CustomerActionTypes.Remove;
  constructor(public payload: any) {
  }
}
export class CustomerUpdate implements Action {
  readonly type = CustomerActionTypes.Update;
  constructor(public payload: any,public index: any) {
  }
}