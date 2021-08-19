import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/shared/model/customer';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(private customerService : CustomerService) { }
customer : Customer = new Customer();
formSubmit = false;
customerForm = new FormGroup(
  {
    customerFirstName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    customerLastName : new FormControl('',[Validators.required,Validators.minLength(3)]),
    customerAddress : new FormControl('500011',[Validators.required,Validators.minLength(3)]),
    customerDOB : new FormControl('12-01-2012',[Validators.required])
  }
);

saveCustomerData(){
  this.customer = new Customer();
  this.customer.customerFirstName = this.GetCustomerFirstName.value
  this.customer.customerLastName =this. GetCustomerLastName.value
  this.customer.customerDOB = this.GetCustomerDOB.value
  this.customer.customerAddress = this.GetCustomerAddress.value
  this.formSubmit = true;
  this.save();
}

save() {  
  this.customerService.createCustomer(this.customer)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.customer = new Customer();  
}  



get GetCustomerFirstName(){
return this.customerForm.get('customerFirstName');
}
get GetCustomerLastName(){
return this.customerForm.get('customerLastName');
}
get GetCustomerDOB(){
return this.customerForm.get('customerDOB');
}
get GetCustomerAddress(){
return this.customerForm.get('customerAddress');
}
  ngOnInit() {
    this.formSubmit = false;
  }
  addCustomerForm(){
    this.formSubmit=false;
    this.customerForm.reset();
  }
}
