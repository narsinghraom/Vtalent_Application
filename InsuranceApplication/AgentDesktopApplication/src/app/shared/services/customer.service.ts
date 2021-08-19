import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CUSTOMERURL } from '../config/customer-url.enum';
import { Customer } from '../model/customer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService:HttpClient) { }

  /* getCustomerList(): Observable<any> { 
    console.log("NArsingh --");
    console.log(this.httpService.get(CUSTOMERURL.GET_CUSTOMER)); 
    console.log("---");
    return this.httpService.get(CUSTOMERURL.GET_CUSTOMER);  
  }   */
  
  getCustomerList(): Observable<any>{
    return this.httpService.get(CUSTOMERURL.GET_CUSTOMER).pipe(
      catchError(this.errorHandler)
    )
  }

  createCustomer(customer: object): Observable<object> {  
    return this.httpService.post(CUSTOMERURL.CREATE_CUSTOMER, customer);  
  }  
  
  deleteCustomer(referanceId: number): Observable<any> {  
    return this.httpService.delete(CUSTOMERURL.DELETE_CUSTOMER +'/'+referanceId, { responseType: 'text' });  
    // return this.httpService.delete(CUSTOMERURL.DELETE_CUSTOMER +'/'+'DS-0001', { responseType: 'text' });
  } 
  
  UpdateCustomer(CustData:object):Observable<any>{
    return this.httpService.post(CUSTOMERURL.UPDATE_CUSTOMER,CustData)
  }

  getCustDataByID(referanceId: number): Observable<Object> {  
    return this.httpService.get(CUSTOMERURL.GET_CUSTOMER_BYID +'/'+referanceId, { responseType: 'text' }).pipe(
      catchError(this.errorHandler))

    // return this.httpService.get(CUSTOMERURL.GET_CUSTOMER_BYID +'/'+'DS-0120', { responseType: 'text' }).pipe(
    //   catchError(this.errorHandler))
  } 
  
  getCustomer(customerZipCode: string,customerAddress:string): Observable<Object> {
    params : new HttpParams().set('customerZipCode',customerZipCode)
    .set('customerAddress',customerAddress);
    
    return this.httpService.get(CUSTOMERURL.CREATE_CUSTOMER);  
  } 
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
   
}
