import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowsdataService {

  constructor(private http: HttpClient) { }
  public getshowsdata() {
    return this.http.get(`/api/shows`);
  }
}
