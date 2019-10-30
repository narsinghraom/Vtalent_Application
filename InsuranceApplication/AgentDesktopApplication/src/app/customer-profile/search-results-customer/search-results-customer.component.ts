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
    this.dataSource = new MatTableDataSource<Customer>(this.customersList);
    
   }  
   customersList: Customer[]; 
  displayedColumns: string[] = ['customerFirstName', 'customerLastName', 'customerDOB', 'customerAddress'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

ngOnChanges(){
  
}
ngDoCheck(){
 
  
}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.customerService.getCustomerList().subscribe(data =>{  
      this.customersList =data;  
     
      }) 
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
