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

  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService
  ) { }

  ngOnInit() {
    this.sportservice.getallsports()
      .subscribe(
        (res: any) => {
          this.allsports = res;
        });
  }
}
