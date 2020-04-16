import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
  {
    path: '', component: CustomersComponent,pathMatch: 'full'
  },
  {
    path: 'customers',component: CustomersViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
