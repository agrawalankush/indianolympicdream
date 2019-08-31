import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SportsService } from '../sports.service';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit, AfterViewInit {
  public errmsg: string;
  public athletes: any;
  public totalathletes;
  public searchquery = '';
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private sportservice:SportsService) { }

  ngOnInit() {
    this.getathletes();
  }
  ngAfterViewInit() {
    // this.paginator.page.pipe(tap(() => this.getathletes())).subscribe();
  }
  public getathletes(){
    this.sportservice.getathletes()
    .subscribe(
      (athletes:any) =>{
        //console.log(sportsdata.data[0]);
        this.athletes = athletes.data.athletes;
        this.totalathletes = athletes.data.total;
      },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      }
    )
  }
}
