import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Tokyo2025WcDataService } from '../tokyo-2025-wc-data.service';

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

@Component({
  selector: 'app-tokyo-2025-wc-athletes',
  standalone: true,
  templateUrl: './tokyo-2025-wc-athletes.component.html',
  styleUrls: ['./tokyo-2025-wc-athletes.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class Tokyo2025WcAthletesComponent implements OnInit {
  public errmsg: string;
  public athletes: Athlete[];
  public total: number;

  constructor(private tokyo2025WcDataService: Tokyo2025WcDataService) { } // Inject new service

  ngOnInit(): void {
    this.getTokyo2025WcAthletes();
  }

  getTokyo2025WcAthletes() {
    this.tokyo2025WcDataService.getAthletes() // Call method from new service
      .pipe(
        catchError((error) => {
          this.errmsg = error.message || 'An error occurred';
          return observableOf({ athletes: [], total: 0 });
        })
      )
      .subscribe((res: AthleteResponse) => {
        this.athletes = res.athletes;
        this.total = res.total;
      });
  }
}