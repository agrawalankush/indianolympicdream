import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SportsdataService {

  constructor(private http: HttpClient) { }
  
  public getallsports() {
    return this.http.get(`/api/allsports`);
  }
}
