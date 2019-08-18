import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SportsService } from '../sports.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public errmsg: string;
  public sportname:string;
  public pdfSrc:string;
  public sportsdetails:any;
  public eventstablemen:any;
  public eventstablewomen:any;
  public selecteddatasource:any;
  public displayedColumns: string[] = ['Event', 'EntryStandard', 'NR', 'WR'];
  public displayedcalendarColumns: string[] = ['EventDate', 'EventName','Result']
  constructor(
    private route:ActivatedRoute,
    private sportservice:SportsService
  ) { }

  ngOnInit() {
    this.sportname = this.route.snapshot.parent.paramMap.get('sportname');
    this.getsportdetails(this.sportname);
  }
  public getsportdetails(sportname: string){
    this.sportservice.getsports(sportname)
    .subscribe(
      (sportsdata:any) =>{
        console.log(sportsdata.data[0]);
        this.sportsdetails = sportsdata.data[0];
        this.eventstablemen = sportsdata.data[0].events.men;
        this.eventstablewomen = sportsdata.data[0].events.women;
        this.selecteddatasource = this.eventstablemen;
      },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      }
    )
  }
  public setdatasource(selectedvalue) {
if(selectedvalue === 'Men'){
this.selecteddatasource = this.eventstablemen;
} else {
this.selecteddatasource = this.eventstablewomen;
}
  }
}
