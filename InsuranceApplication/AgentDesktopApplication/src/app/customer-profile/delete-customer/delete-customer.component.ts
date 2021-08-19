<<<<<<< HEAD
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/model/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b7dbf8c961dca41b33c2ccfb9eea5eb68f9237ea

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

<<<<<<< HEAD
  customer : Customer = new Customer();
 
  constructor(private customerService: CustomerService) {
    console.log("Constructor");
     
  }

  callDeleteService(){
    this.customerService.deleteCustomer(this.GetCustomerReferanceId.value).subscribe((data: Customer[]) =>{
      console.log("@@@@@@@@@@@@@")
      console.log(data);
      console.log("--------------")
      
      this.customersList =data});
  }

  formSubmit:boolean = false;
  customersList: Customer[]; 


  CustomerForm = new FormGroup(
    {
      customerReferanceId: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }
  );

  get GetCustomerReferanceId() {
    return this.CustomerForm.get('customerReferanceId');
  }

  onSubmit(){
    this.callDeleteService();
    this.formSubmit=!this.formSubmit;
}
ngOnInit() {
  this.formSubmit = false;
}
addCustomerForm(){
  this.formSubmit=false;
  this.CustomerForm.reset();
}

=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> b7dbf8c961dca41b33c2ccfb9eea5eb68f9237ea
}
