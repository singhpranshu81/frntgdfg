import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/entity/Customer';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  registerModel :Customer = {
    customerId:0,
    fullName: '',
    role: 'Admin',
    password: '',
    mobileNumber: '',
    email:'',
    gender:''
  };
  errorMessage: string | null = null;

  constructor(private customerService:CustomerService,private router: Router) {}
    confirmPassword: string = '';
    errorMessages: string = '';
  onSubmit() {
    console.log(this.registerModel);
  
    this.customerService.addCustomer(this.registerModel).subscribe({
      next: (response) => {

        console.log("Admin Created..", response);
        this.router.navigate(['/adminlogin']);
      },
      error: (error) => {
        console.error("Error adding Admin...", error);
      }
    });
    if (this.registerModel.password !== this.confirmPassword) {
      this.errorMessages = "Passwords do not match.";
      return;
    }
  }

}
