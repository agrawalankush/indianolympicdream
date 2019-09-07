import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SportsdataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }
  
  public getallsports() {
    return this.http.get(`/api/allsports`);
  }
  public getsports(sportname: string) {
    return this.http.get(`/api/sports/${sportname}`);
  }
  public getcalendar(filter: string, pageIndex: number, pageSize: number) {
    let params = new HttpParams()
    .set('searchterm', filter)
    .set('pageIndex', pageIndex.toString())
    .set('pageSize', pageSize.toString());
    return this.http.get(`/api/calendar`, {params: params});
  }
  public getathletes() {
    // let params = new HttpParams()
    // .set('searchterm', filter)
    // .set('pageIndex', pageIndex.toString())
    // .set('pageSize', pageSize.toString());
    return this.http.get(`/api/athletes`);
  }
  // postfeedback(feedbackjson){
  //   return this.http.post(`/api/feedback`,feedbackjson,this.httpOptions);  
  // }
}
