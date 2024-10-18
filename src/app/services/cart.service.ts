import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private empApiUrl = 'http://localhost:8082/cart';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
   };
  constructor(private http: HttpClient) {}

  getCartbyId(id: number): Observable<any>  {
    return this.http.get(`${this.empApiUrl}/view/${id}`);
  }
}
