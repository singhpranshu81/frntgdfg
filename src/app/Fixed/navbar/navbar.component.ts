import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
     
  // isAdmin:boolean=false;

  constructor(private authService:AuthService,private router:Router){}
  // ngOnInit(): void {
  //   const currentUserRole = JSON.parse(
  //     localStorage.getItem('user') || '{}'
  //   ).role;
  //   if(currentUserRole === 'Admin'){
  //     this.isAdmin=true;
  //   }
  // }
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  signOut(): void {
   this.authService.logout(); // Clear local storage
    this.router.navigate(['/login']); // Redirect to login page
  }
}
