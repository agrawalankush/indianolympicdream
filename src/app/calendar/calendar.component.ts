import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { SportsdataService } from '../sportsdata.service';
import { CalendarDataSource } from './datasource';
import { tap } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule, MatPaginatorModule, MatTableModule]
})
export class CalendarComponent implements OnInit, AfterViewInit {
  public errmsg: string;
  public calendar: any;
  public searchquery = '';
  public dataSource: CalendarDataSource;
  public displayedColumns: string[] = ['EventName', 'Sport', 'StartDate', 'EndDate', 'Venue'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private edition: string;
  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService
  ) { }

  ngOnInit() {
    this.dataSource = new CalendarDataSource(this.sportservice);
    this.route.queryParams.subscribe(params => {
      this.edition = params['edition'] || '2028';
      this.dataSource.loadCalendar(this.searchquery, 0, 10, this.edition);
    });
  }
  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => this.loadUCalendarPage())).subscribe();
  }
  public loadUCalendarPage() {
    this.dataSource.loadCalendar(
      this.searchquery,
      this.paginator.pageIndex * this.paginator.pageSize,
      this.paginator.pageSize,
      this.edition
    );
  }
}