import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/entity/Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel :Customer = {
    customerId:0,
    fullName: '',
    role: 'Customer',
    password: '',
    mobileNumber: '',
    email:'',
    gender:''
  };
  errorMessage: string | null = null;

  constructor(private customerService:CustomerService,private router: Router) {}
   
  onSubmit() {
    console.log(this.registerModel);
  
    this.customerService.addCustomer(this.registerModel).subscribe({
      next: (response) => {

        console.log("Customer Created..", response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error("Error adding customer...", error);
      }
    });
  }
}
