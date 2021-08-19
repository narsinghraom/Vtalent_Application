import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCustomerComponent } from './customer-profile/edit-customer/edit-customer.component';
import { UpdateCustomerComponent } from './customer-profile/update-customer/update-customer.component';
import { SearchResultsCustomerComponent } from './customer-profile/search-results-customer/search-results-customer.component';
import { DeleteCustomerComponent } from './customer-profile/delete-customer/delete-customer.component';



const routes: Routes = [
  { path: '', redirectTo: 'view-customer', pathMatch: 'full' },  
  { path: 'view-customer', component: SearchResultsCustomerComponent },  
  { path: 'add-customer', component: EditCustomerComponent },
  { path: 'update-customer', component: UpdateCustomerComponent } , 
  {path: 'delete-customer', component: DeleteCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
