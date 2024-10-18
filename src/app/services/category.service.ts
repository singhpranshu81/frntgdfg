import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private empApiUrl = 'http://localhost:8082/category';

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   }),
  };
 constructor(private http: HttpClient) {}
 
 getAllCategory(): Observable<any> {
  return this.http.get(`${this.empApiUrl}/viewall`);
}

getCategoryById(id: number): Observable<any> {
  return this.http.get(`${this.empApiUrl}/view/${id}`);
}

createCategory(food: any): Observable<any> {
  return this.http.post(`${this.empApiUrl}/add`, food,this.httpOptions);
}

updateCategory(food: any): Observable<any> {
  return this.http.put(`${this.empApiUrl}/update`, food,this.httpOptions);
}

deleteCategory(id: number): Observable<any> {
  return this.http.delete(`${this.empApiUrl}/remove/${id}`);
}
getNextCategoryId(): Observable<any> {
  return this.http.get(`${this.empApiUrl}/next-cid`);
}
}
