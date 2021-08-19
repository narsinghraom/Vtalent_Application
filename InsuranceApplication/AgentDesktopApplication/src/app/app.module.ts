import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCustomerComponent } from './customer-profile/edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './customer-profile/search-customer/search-customer.component';
import { SearchResultsCustomerComponent } from './customer-profile/search-results-customer/search-results-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './customer-profile/update-customer/update-customer.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteCustomerComponent } from './customer-profile/delete-customer/delete-customer.component';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';



@NgModule({
  declarations: [
    AppComponent,
    EditCustomerComponent,
    SearchCustomerComponent,
    SearchResultsCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
