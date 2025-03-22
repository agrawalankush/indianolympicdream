import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllSportsResolved } from '../models/app-models';
import { SportsdataService } from '../sportsdata.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  public errmsg:string;
  public allsports: any;
  constructor(private route:ActivatedRoute, private sportservice: SportsdataService) { }

  ngOnInit() {
    this.sportservice.getallsports()
    .subscribe(
      (res: any) => {
      this.allsports = res;
    });
  }
}
