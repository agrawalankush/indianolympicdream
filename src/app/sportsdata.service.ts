import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SportDetails, AllSports, Athletes, Calendar, Shows } from './models/app-models'; 

@Injectable({
  providedIn: 'root'
})

export class SportsdataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }
  
  public getallsports() {
    return this.http.get<AllSports[]>(`/api/allsports`);
  }
  public getsports(sportname: string) {
    return this.http.get<SportDetails[]>(`/api/sports/${sportname}`);
  }
  public getcalendar(filter: string, pageIndex: number, pageSize: number) {
    let params = new HttpParams()
    .set('searchterm', filter)
    .set('pageIndex', pageIndex.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get<Calendar[]>(`/api/calendar`, {params: params});
  }
  public getathletes() {
    // let params = new HttpParams()
    // .set('searchterm', filter)
    // .set('pageIndex', pageIndex.toString())
    // .set('pageSize', pageSize.toString());
    return this.http.get<Athletes[]>(`/api/athletes`);
  }
  public getshowsdata() {
    return this.http.get<Shows[]>(`/api/shows`);
  }
  // postfeedback(feedbackjson){
  //   return this.http.post(`/api/feedback`,feedbackjson,this.httpOptions);  
  // }
}
