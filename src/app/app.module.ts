import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReducer } from './customer.reducer';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomersViewComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    StoreModule.forRoot({ customers: CustomerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
