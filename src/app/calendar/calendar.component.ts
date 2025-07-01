import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { SportsdataService } from '../sportsdata.service';
import { CalendarDataSource } from './datasource';
import { tap } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule, MatPaginatorModule, MatTableModule, CountdownComponent]
})
export class CalendarComponent implements OnInit, AfterViewInit {
  public errmsg: string;
  public calendar: any;
  public searchquery = '';
  public dataSource: CalendarDataSource;
  public displayedColumns: string[] = ['EventName', 'Sport', 'StartDate', 'EndDate', 'Venue'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public edition: string;
  public countdownTargetDate: Date;

  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService
  ) { }

  ngOnInit() {
    this.dataSource = new CalendarDataSource(this.sportservice);
    this.route.queryParams.subscribe(params => {
      this.edition = params['edition'] || '2028';
      // Only load data if paginator is available, otherwise it will be loaded in ngAfterViewInit
      if (this.paginator) {
        this.loadUCalendarPage();
      }
    });
    // Subscribe to dataSource changes to find the earliest date
    this.dataSource.calendarSubject.subscribe(calendarData => {
      if (calendarData && calendarData.length > 0) {
        // Find the earliest start date from the calendar data
        const earliestEvent = calendarData.reduce((prev, curr) => {
          const prevDate = new Date(prev.event[0].startdate).getTime();
          const currDate = new Date(curr.event[0].startdate).getTime();
          return (prevDate < currDate) ? prev : curr;
        });
        this.countdownTargetDate = new Date(earliestEvent.event[0].startdate); // Default to LA2028 Opening Ceremony
      } else {
        this.countdownTargetDate = new Date("2026-07-24T00:00:00");; // Clear countdown if no events
      }
    });
  }
  ngAfterViewInit() {
    // Initial load when paginator is available
    this.loadUCalendarPage();
    this.paginator.page.pipe(tap(() => this.loadUCalendarPage())).subscribe();
  }
  public loadUCalendarPage() {
    const pageIndex = this.paginator ? this.paginator.pageIndex : 0;
    const pageSize = this.paginator ? this.paginator.pageSize : 10;

    this.dataSource.loadCalendar(
      this.searchquery,
      pageIndex,
      pageSize,
      this.edition
    );
  }
}