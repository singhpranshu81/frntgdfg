import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginDetails = {
    userName: '',
    password: '',
    role: 'Admin'
  };

  errorMessage: string | null = null;
constructor(private customerService:CustomerService,private router:Router){}
  goToDash(){
    this.customerService.loginCustomer(this.loginDetails.userName,this.loginDetails.password,this.loginDetails.role).subscribe(
      (data:any)=>{
        if(data){
          localStorage.setItem('user',JSON.stringify(data))
          this.router.navigate(['/dashboard'])
        }else{
          this.errorMessage="Invalid Credentials"
        }
      },
      (error)=>{
        this.errorMessage="Invalid Credentials"
      }
    )

  }
}
