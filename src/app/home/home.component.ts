import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AllSportsResolved } from '../models/app-models';
import { SportsdataService } from '../sportsdata.service';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterLink, MatCardModule]
})
export class HomeComponent implements OnInit {
  public errmsg: string;
  public allsports: any;
  private edition: string;

  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const newEdition = params['edition'] || '2028';
      if (this.edition !== newEdition) {
        this.edition = newEdition;
        this.sportservice.getallsports(this.edition)
          .subscribe(
            (res: any) => {
              this.allsports = res;
            });
      }
    });
  }
}