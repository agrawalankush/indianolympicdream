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
  postfeedback(feedbackjson){
    return this.http.post(`/api/feedback`,feedbackjson,this.httpOptions);  
  }
}
