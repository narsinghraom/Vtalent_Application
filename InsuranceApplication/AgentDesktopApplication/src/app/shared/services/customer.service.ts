import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CUSTOMERURL } from '../config/customer-url.enum';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService:HttpClient) { }

  getCustomerList(): Observable<any> {  
    return this.httpService.get(CUSTOMERURL.CREATE_CUSTOMER);  
  }  
  
  createCustomer(customer: object): Observable<object> {  
    return this.httpService.post(CUSTOMERURL.CREATE_CUSTOMER, customer);  
  }  
  
  deleteCustomer(referanceId: number): Observable<any> {  
    return this.httpService.delete(CUSTOMERURL.CREATE_CUSTOMER +'/'+'${referanceId}', { responseType: 'text' });  
  }  
  
  getCustomer(customerZipCode: string,customerAddress:string): Observable<Object> {
    params : new HttpParams().set('customerZipCode',customerZipCode)
    .set('customerAddress',customerAddress);
    
    return this.httpService.get(CUSTOMERURL.CREATE_CUSTOMER);  
  }  
   
}
