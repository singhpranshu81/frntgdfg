import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private empApiUrl = 'http://localhost:8082/customer';

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
  };
 constructor(private http: HttpClient) {}
 
 getCustomerById(id: number): Observable<any> {
  return this.http.get(`${this.empApiUrl}/view/${id}`);
}
  addCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.empApiUrl}/add`, customer, this.httpOptions);
  }

  updateCustomer( customer: any): Observable<any> {
    return this.http.put(`${this.empApiUrl}/update`, customer, this.httpOptions);
  }

  removeCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.empApiUrl}/remove/${id}`, this.httpOptions);
  }
loginCustomer(userName: string, password: string,role:string): Observable<any> {
  return this.http.get(`${this.empApiUrl}/login/${userName}/${password}/${role}`);
}
}
