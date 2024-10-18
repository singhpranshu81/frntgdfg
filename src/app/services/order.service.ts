import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private empApiUrl = 'http://localhost:8082/order';

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
  };
  constructor(private http: HttpClient) {}



 getOrderById(id: number): Observable<any> {
   return this.http.get(`${this.empApiUrl}/view/${id}`);
 }

 createOrder(order: any): Observable<any> {
   return this.http.post(`${this.empApiUrl}/save`, order,this.httpOptions);
 }
 updateOrder(order: any): Observable<any> {
   return this.http.put(`${this.empApiUrl}/update`, order,this.httpOptions);
 }
  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.empApiUrl}/remove/${id}`);
  }
}
