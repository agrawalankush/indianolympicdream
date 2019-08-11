import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SportsService } from '../sports.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-sport-home',
  templateUrl: './sport-home.component.html',
  styleUrls: ['./sport-home.component.scss']
})
export class SportHomeComponent implements OnInit {
  /*
  navLinks = [
    {path:'qualifying',label:'Qualifying'},
    {path:'calendar',label:'Calendar'},
    {path:'athletes',label:'Athletes'},
    {path:'history',label:'History'}];
  activeLink = this.navLinks[0].path;
  */
 public sportname:string;
 public pdfSrc:string;
 public sportsdetails:any;
 public eventstablemen:any;
 public eventstablewomen:any;
 public selecteddatasource:any;
 public displayedColumns: string[] = ['Event', 'EntryStandard', 'NR', 'WR'];
  constructor(
    private route:ActivatedRoute,
    private sportservice:SportsService
  ) {
  }
  ngOnInit() {
    
   this.sportname = this.route.snapshot.paramMap.get('sportname');
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
