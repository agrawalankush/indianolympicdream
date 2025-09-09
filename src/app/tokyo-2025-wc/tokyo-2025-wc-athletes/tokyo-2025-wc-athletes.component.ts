import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Tokyo2025WcDataService } from '../tokyo-2025-wc-data.service';

interface Athlete {
  id: number;
  name: string;
  sportname: string;
  event: string;
  image: string;
  webpimage?: string;
  qualificationEvent: string;
  date_qualified: number;
  PB?: string;
  SB?: string;
  profileUrl?: string; // Added profileUrl
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
  profileLinks = {
    1: 'https://worldathletics.org/athletes/india/neeraj-chopra-14549089',
    2: 'https://worldathletics.org/athletes/india/sreeshankar-14734673',
    3: 'https://worldathletics.org/athletes/india/annu-rani-14422692',
    4: 'https://worldathletics.org/athletes/india/sandeep-kumar-14381862',
    5: 'https://worldathletics.org/athletes/india/priyanka-14477764',
    6: 'https://worldathletics.org/athletes/india/animesh-kujur-14971002',
    7: 'https://worldathletics.org/athletes/india/gulveer-singh-15023839',
    8: 'https://worldathletics.org/athletes/india/parul-chaudhary-14497992',
    9: 'https://worldathletics.org/athletes/india/sachin-yadav-14925646',
    10: 'https://worldathletics.org/athletes/india/yash-vir-singh-14818383',
    11: 'https://worldathletics.org/athletes/india/rohit-yadav-14740932',
    12: 'https://worldathletics.org/athletes/india/abdulla-aboobacker-narangolintevida-14606734',
    13: 'https://worldathletics.org/athletes/india/sarvesh-anil-kushare-14675319',
    14: 'https://worldathletics.org/athletes/india/servin-sebastian-14841043',
    15: 'https://worldathletics.org/athletes/india/ram-baboo-14919137',
    16: 'https://worldathletics.org/athletes/india/tejas-shirse-14873420',
    17: 'https://worldathletics.org/athletes/india/pooja-14818407',
    18: 'https://worldathletics.org/athletes/india/praveen-chithravel-14841034',
    19: 'https://worldathletics.org/athletes/india/ankita-14818406'
   };

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
        this.athletes = res.athletes.map(athlete => {
          const profileUrl = this.profileLinks[athlete.id as keyof typeof this.profileLinks];
          return { ...athlete, profileUrl };
        });
        this.total = res.total;
      });
  }

  navigateToProfile(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  }
}