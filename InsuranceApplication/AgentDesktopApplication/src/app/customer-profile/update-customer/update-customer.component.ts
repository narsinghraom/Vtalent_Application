import { Component, OnInit } from '@angular/core';
// import jsonObhect from './todo.json';
import { plainToClass } from 'class-transformer';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/shared/model/customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  
  customer : Customer = new Customer();
 
  constructor(private customerService: CustomerService) {  }
  formSubmit:boolean = false;
  isHidden:boolean=false;
  customersList: Customer; 
  //  displayedColumns: string[] = ['customerReferanceId','customerFirstName', 'customerLastName', 'customerDOB', 'customerAddress'];
  
   UpdateCustomerForm = new FormGroup(
    {
      customerReferanceId: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }
  );

  customerForm = new FormGroup(
    {
      customerFirstName : new FormControl("",[Validators.required,Validators.minLength(3)]),
      customerLastName : new FormControl('',[Validators.required,Validators.minLength(3)]),
      customerAddress : new FormControl('500011',[Validators.required,Validators.minLength(3)]),
      customerDOB : new FormControl('12-01-2012',[Validators.required])
    }
  );

  callUpdateService(){
    console.log("Constructor");
    this.customerService.getCustDataByID(this.GetCustomerReferanceId.value).subscribe((data: Customer) =>{
      console.log("@@@@@@@@@@@@@")
      console.log(data);
      console.log("--------------")
      
      this.customersList =data;
      
      // let customer = Object.assign(new Customer(), data);
      // let newTodo = plainToClass(Customer, data); 
    }
      ); 
  }

  saveCustomerData(){
    this.customer = new Customer();
    this.customer.customerFirstName = this.GetCustomerFirstName.value
    this.customer.customerLastName =this. GetCustomerLastName.value
    this.customer.customerDOB = this.GetCustomerDOB.value
    this.customer.customerAddress = this.GetCustomerAddress.value
    this.formSubmit = true;
    this.save();
    this.isHidden=!this.isHidden;
  }
  
  save() {  
    this.customerService.createCustomer(this.customer)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.customer = new Customer();  
  }


  get GetCustomerReferanceId() {
    return this.UpdateCustomerForm.get('customerReferanceId');
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
  onSubmit(){
    this.callUpdateService();
       this.formSubmit=!this.formSubmit;
  }

  ngOnInit() {
    this.formSubmit = false;
  }
  addCustomerForm() {
    this.formSubmit = false;
    this.customerForm.reset();
  }

}
