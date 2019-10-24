import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCustomerComponent } from './customer-profile/edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './customer-profile/search-customer/search-customer.component';


const routes: Routes = [
  { path: '', redirectTo: 'view-customer', pathMatch: 'full' },  
  { path: 'view-customer', component: SearchCustomerComponent },  
  { path: 'add-customer', component: EditCustomerComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
