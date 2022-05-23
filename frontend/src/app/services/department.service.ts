import { Department } from './../models/Department';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  readonly API_URL = environment.URL;

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  getDepartments():Observable<Department[]> {
    return this.http.get<Department[]>(`${this.API_URL}/departments`, this.httpOptions)
    .pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }

  getDepartmentById(id: number|string){
    return this.http.get<Department>(`${this.API_URL}/departments/${id}`)
    .pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }

  addDepartment(departments: Department) {
    return this.http.post(`${this.API_URL}/departments`, departments)
    .pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }

  updateDepartment(id:number|string, departments:Department) {
    return this.http.put(`${this.API_URL}/departments/${id}`, departments)
    .pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }

  deleteDepartment(id: number|string) {
    return this.http.delete(`${this.API_URL}/departments/${id}`)
    .pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }
}
