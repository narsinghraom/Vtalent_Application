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
    customerDOB : new FormControl('',[Validators.required])
  }
);

saveCustomerData(){
  this.customer = new Customer();
  this.customer.customerFirstName = this.customerForm.get('first_Name').value
  this.customer.customerLastName = this.customerForm.get('last_name').value
  this.customer.customerDOB = this.customerForm.get('dob').value
  this.customer.customerAddress = this.customerForm.get('zipCode').value
  this.formSubmit = true;
  this.save();
}

save() {  
  this.customerService.createCustomer(this.customer)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.customer = new Customer();  
}  

  ngOnInit() {
    this.formSubmit = false;
  }
  addCustomerForm(){
    this.formSubmit=false;
    this.customerForm.reset();
  }
}
