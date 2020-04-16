import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CustomerRemove} from '../customer.actions';
import {CustomerUpdate} from '../customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent  {
  customerName:any;
  index:any;
  isPresent:boolean = false;
  customers: Observable<Customer>;
  constructor(private store: Store<{ customers: Customer }>,) {
      this.customers = this.store.pipe(select('customers'));

  }
  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
    
  }

  updateCustomer(customer,i){
    this.isPresent = true;
       this.customerName=customer.name;
    this.index = i;
  }
  saveChanges(customerName){
    this.isPresent = false;
    console.log(customerName)
    this.store.dispatch(new CustomerUpdate({name:customerName},this.index));
    this.customers = this.store.pipe(select('customers'));
    this.customers.subscribe(val =>console.log(val));
    this.customerName = "";
  }
}
