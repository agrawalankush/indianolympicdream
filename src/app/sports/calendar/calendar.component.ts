import {Component,OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SportsService } from '../sports.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit,AfterViewInit {
  public errmsg:string;
  public calendar: any;
  public displayedColumns: string[] = ['EventName','Sport', 'StartDate', 'EndDate', 'Venue'];
  constructor(
    private route:ActivatedRoute,
    private sportservice:SportsService
  ) { }

  ngOnInit() {  
  }
  ngAfterViewInit() {
    
      this.sportservice.getcalendar()
      .subscribe(
        (calendardata:any) =>{
          // console.log(sportsdata.data[0]);
          calendardata.data.forEach(element => {
            let sdate = new Date(element.startdate*1000);
            let edate = new Date(element.enddate*1000);
            element.startdate = sdate.toDateString();
            element.enddate = edate.toDateString();
          });
          this.calendar = calendardata.data;
        },
        (error) =>{
          this.errmsg = error.error;
          console.log(error);
        }
      )
    }
  public applyFilter(searchterm: string){
      console.log(searchterm);
    }  
}
