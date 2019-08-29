import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  public getsports(sportname: string) {
    return this.http.get(`/api/sports/${sportname}`);
  }
  public getcalendar() {
    return this.http.get(`/api/calendar`);
  }
}
