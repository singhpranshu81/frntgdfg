import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private empApiUrl = 'http://localhost:8082/item';

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
  };
 constructor(private http: HttpClient) {}

 getAllFood(): Observable<any> {
   return this.http.get(`${this.empApiUrl}/viewall`);
 }

 getFoodById(id: number): Observable<any> {
   return this.http.get(`${this.empApiUrl}/view/${id}`);
 }

 createFood(food: any): Observable<any> {
   return this.http.post(`${this.empApiUrl}/add`, food,this.httpOptions);
 }

 updateFood(food: any): Observable<any> {
   return this.http.put(`${this.empApiUrl}/update`, food,this.httpOptions);
 }

 deleteFood(id: number): Observable<any> {
   return this.http.delete(`${this.empApiUrl}/remove/${id}`);
 }

 


}
