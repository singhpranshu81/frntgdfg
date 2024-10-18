import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Customer } from 'src/entity/Customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8082/customer';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  };
  // Method to login user
  login(suser: Customer): Observable<any> {
    console.log(suser);
    return this.http
      .get<Customer>(
        this.apiUrl +
          '/login/' +
          suser.fullName +
          '/' +
          suser.password +
          '/' +
          suser.role
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // Method to logout user
  logout(): void {
    localStorage.removeItem('user'); // Remove user from local storage
  }

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user'); // Return true if user exists in local storage
  }

  // Method to handle errors

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
