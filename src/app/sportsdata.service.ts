import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { SportDetails, AllSports, Athletes, Calendar, Shows } from './models/app-models';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class SportsdataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  public getallsports(edition: string) {
    const params = new HttpParams()
      .set('edition', edition);
    return this.http.get<AllSports[]>(`/api/allsports`, { params })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  public getsports(sportname: string, edition: string) {
    const params = new HttpParams()
      .set('edition', edition);
    return this.http.get<any>(`/api/sports/${sportname}`, { params })
      .pipe(
        retry(2)
      );
  }
  public getcalendar(filter: string, pageIndex: number, pageSize: number, edition: string) {
    const params = new HttpParams()
      .set('searchterm', filter)
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())
      .set('edition', edition);
    return this.http.get<Calendar[]>(`/api/calendar`, { params })
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  public getathletes(sports: any, pageIndex: string, pageSize: string, edition: string) {
    let params = new HttpParams()
      .set('pageIndex', pageIndex)
      .set('pageSize', pageSize)
      .set('edition', edition);
    params = params.append('searchedsports', JSON.parse(sports));
    return this.http.get<any>(`/api/athletes`, { params })
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  public getschedule(sport: string, edition: string) {
    let params = new HttpParams()
    // .set('pageIndex', pageIndex)
    // .set('pageSize', pageSize);
    params = params.append('searchedsports', sport);
    params = params.append('edition', edition);
    return this.http.get<any>(`/api/schedule`, { params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  public getschedulebydate(date: string, edition: string) {
    let params = new HttpParams()
    // .set('pageIndex', pageIndex)
    // .set('pageSize', pageSize);
    params = params.append('date', date);
    params = params.append('edition', edition);
    return this.http.get<any>(`/api/schedulebydate`, { params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  public getshowsdata(pageIndex: number, pageSize: number) {
    const params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())
    return this.http.get<any>(`/api/shows`, { params })
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  postfeedback(feedbackjson: { name: string, email: string, feedback: string }) {
    return this.http.post(`/api/feedback`, feedbackjson, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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