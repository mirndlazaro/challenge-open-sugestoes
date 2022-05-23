import { Employee } from 'src/app/models/Employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeService {

  readonly API_URL = environment.URL;

  httpOptions ={
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

  getEmployee():Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL}/employees`, this.httpOptions)
    .pipe(
      retry(3),
      //catchError(this.handleError)
    );
  }

  getSuggestionById(id: number|string){
    return this.http.get<any>(`${this.API_URL}/departments/${id}`)
    .pipe(
      retry(3),
      //catchError(this.handleError)
    );
  }
}
