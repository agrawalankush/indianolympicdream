import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { SportDetails, AllSports, Athletes, Calendar, Shows } from './models/app-models';
import { Observable, throwError } from 'rxjs';
import {  catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class SportsdataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  public getallsports() {
    return this.http.get<AllSports[]>(`/api/allsports`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  public getsports(sportname: string) {
    return this.http.get<any>(`/api/sports/${sportname}`)
    .pipe(
      retry(2)
    );
  }
  public getcalendar(filter: string, pageIndex: number, pageSize: number) {
    const params = new HttpParams()
    .set('searchterm', filter)
    .set('pageIndex', pageIndex.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get<Calendar[]>(`/api/calendar`, {params})
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  public getathletes(sports: any, pageIndex: number, pageSize: number) {
    let params = new HttpParams()
    .set('pageIndex', pageIndex.toString())
    .set('pageSize', pageSize.toString());
    params = params.append('searchedsports', sports);
    return this.http.get<any>(`/api/athletes`, {params})
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  public getshowsdata(pageIndex: number, pageSize: number) {
    const params = new HttpParams()
    .set('pageIndex', pageIndex.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get<any>(`/api/shows`, {params})
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  postfeedback(feedbackjson) {
    return this.http.post(`/api/feedback`, feedbackjson, this.httpOptions);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

      // return an observable with a user-facing error message
      return throwError(
        'Your network is playing tricks on you, please fix and try again!');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
      return throwError(
          'I screwed-up on my server somewhere, Please try again after sometime or report to me directly!');
        }
    }

}
