import {Component,OnInit, AfterViewInit, ViewChild} from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { SportsdataService } from '../sportsdata.service';
import { CalendarDataSource } from './datasource';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit,AfterViewInit {
  public errmsg:string;
  public calendar: any;
  public searchquery = '';
  public dataSource: CalendarDataSource;
  public displayedColumns: string[] = ['EventName','Sport', 'StartDate', 'EndDate', 'Venue'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    // private route:ActivatedRoute,
    private sportservice:SportsdataService
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
}
