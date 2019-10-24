import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCustomerComponent } from './customer-profile/edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './customer-profile/search-customer/search-customer.component';
import { SearchResultsCustomerComponent } from './customer-profile/search-results-customer/search-results-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditCustomerComponent,
    SearchCustomerComponent,
    SearchResultsCustomerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
