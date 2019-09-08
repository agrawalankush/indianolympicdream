import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { SportDetails } from '../models/app-models';
@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.scss']
})
export class SportDetailsComponent implements OnInit {
  public errmsg: string;
  public sportname:string;
  public sportsdetails:any;
  public displayedColumns: string[] = ['Event', 'EntryStandard', 'NR', 'WR'];
  constructor(
    private route:ActivatedRoute,
    private sportservice:SportsdataService
  ) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: { sportdata: SportDetails[] }) => {
      // console.log(data.sportdata);
      this.sportsdetails = data.sportdata[0];
    });
  }
}
