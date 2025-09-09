import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Athlete {
  name: string;
  sportname: string;
  event: string;
  image: string;
  webpimage?: string;
  qualificationEvent: string;
  date_qualified: number;
  PB?: string;
  SB?: string;
}

interface AthleteResponse {
  athletes: Athlete[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class Tokyo2025WcDataService {



  constructor(private http: HttpClient) { }

  public getAthletes() {
    let params = new HttpParams()
    // params = params.append('searchedsports', JSON.parse(sports));
    return this.http.get<any>(`/api/tokyo_2025_athletes`)
  }

  public getSchedule() {
    let params = new HttpParams()
    params = params.append('indiaOnly', true);
    return this.http.get<any>(`/api/tokyo_2025_schedule`,{params})
  }

   public getEventDetails(eventId: string, stage?: string, unitName?: string) {
    let params = new HttpParams()
    params = params.append('stage', stage);
    if(unitName) params = params.append('unitName', unitName);
    return this.http.get<any>(`/api/eventdetails/${eventId}`, { params });
  }
}