import {Component,OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material';
import { SportsService } from '../sports.service';
import { CalendarDataSource } from './datasource';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  public errmsg:string;
  public calendar: any;
  public searchquery = '';
  dataSource: CalendarDataSource;
  public displayedColumns: string[] = ['EventName','Sport', 'StartDate', 'EndDate', 'Venue'];
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private sportservice:SportsService
  ) { }

  ngOnInit() {
    this.dataSource = new CalendarDataSource(this.sportservice);
    this.dataSource.loadCalendar(this.searchquery, 0, 10);  
  }
  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => this.loadUCalendarPage())).subscribe();
  }
  public loadUCalendarPage() {
    this.dataSource.loadCalendar(
      this.searchquery,
      this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageSize
    );
  }
  // public applyFilter(searchterm: string){
  //   this.searchquery = searchterm;
  //   this.dataSource.loadCalendar(
  //     this.searchquery,
  //     this.paginator.pageIndex * this.paginator.pageSize,
  //     this.paginator.pageSize
  //   );
  //   }  
}
