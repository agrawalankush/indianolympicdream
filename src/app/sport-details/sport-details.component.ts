import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
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
    this.sportname = this.route.snapshot.paramMap.get('sportname');
    console.log(this.sportname);
    this.getsportdetails(this.sportname);
  }
  public getsportdetails(sportname: string){
    this.sportservice.getsports(sportname)
    .subscribe(
      (sportsdata:any) =>{
        // console.log(sportsdata.data[0]);
        this.sportsdetails = sportsdata.data[0];
      },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      }
    )
  }
}
