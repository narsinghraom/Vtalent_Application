import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCustomerComponent } from './customer-profile/edit-customer/edit-customer.component';

import { SearchResultsCustomerComponent } from './customer-profile/search-results-customer/search-results-customer.component';


const routes: Routes = [
  { path: '', redirectTo: 'view-customer', pathMatch: 'full' },  
  { path: 'view-customer', component: SearchResultsCustomerComponent },  
  { path: 'add-customer', component: EditCustomerComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
