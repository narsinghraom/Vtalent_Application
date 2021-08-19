import { Component, OnInit, ViewChild, OnChanges, DoCheck } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/shared/model/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-results-customer',
  templateUrl: './search-results-customer.component.html',
  styleUrls: ['./search-results-customer.component.scss']
})
export class SearchResultsCustomerComponent implements OnInit, OnChanges , DoCheck{
  constructor(private customerService:CustomerService) {
    console.log("Constructor");
    
    this.customerService.getCustomerList().subscribe((data: Customer[]) =>{
      console.log("@@@@@@@@@@@@@")
      console.log(data);
      console.log("--------------")
      
      this.customersList =data}); 
    
    
   }  
   customersList: Customer[]; 
  displayedColumns: string[] = ['customerReferanceId','customerFirstName', 'customerLastName', 'customerDOB', 'customerAddress'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

ngOnChanges(){
  console.log("ngOnChanges");
}
ngDoCheck(){
 
  console.log("ngDoCheck");
  this.dataSource = new MatTableDataSource<Customer>(this.customersList);
  console.log(this.customersList);
}

  ngOnInit() {
    console.log("ngOnInit");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
