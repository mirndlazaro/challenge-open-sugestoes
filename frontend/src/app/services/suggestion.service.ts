import { DepartmentService } from "./department.service";
import { Suggestion } from "./../models/Suggestion";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { combineLatest, Observable, throwError } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";
import { environment } from "./../../environments/environment";
import { Util } from "../../util/Util";

@Injectable({
  providedIn: "root",
})
export class SuggestionService {
  readonly API_URL = environment.URL;
  util: Util;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private departmentService: DepartmentService
  ) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
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

  getSuggestions(): Observable<Suggestion[]> {
    return this.http
      .get<Suggestion[]>(`${this.API_URL}/suggestions`, this.httpOptions)
      .pipe(
        map((data) => {
          return data;
        }),
        retry(3)
        //catchError(this.handleError)
      );
  }

  /*
  getSuggestions(model: Suggestion): Observable<Suggestion[]> {
    return this.http
      .get<Suggestion[]>(
        `${this.API_URL}/suggestions${this.util.montaQuery(model)}`,
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.handleError));
  }
  */

  getSuggestionById(id: number | string) {
    return this.http
      .get<any>(this.API_URL + `/suggestions/${id}`)
      .pipe(retry(3),
      //catchError(this.handleError)
    );
  }

  addSuggestion(suggestion: Suggestion) {
    return this.http.post(this.API_URL + "/suggestions", suggestion).pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }

  updateSuggestion(suggestion: Suggestion) {
    return this.http
      .put(this.API_URL + `/suggestions/${suggestion.id}`, suggestion)
      .pipe(
        map((data) => {
          return data;
        }),
        retry(3),
        //catchError(this.handleError)
      );
  }

  deleteSuggestion(id: number | string) {
    return this.http.delete(this.API_URL + `/suggestions/${id}`).pipe(
      map((data) => {
        return data;
      }),
      retry(3),
      //catchError(this.handleError)
    );
  }
}
