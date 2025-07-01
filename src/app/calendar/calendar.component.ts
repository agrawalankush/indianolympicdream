import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SportsdataService } from '../sportsdata.service';
import { Calendar } from '../models/app-models';
import { tap, switchMap, startWith, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule, MatTableModule, MatPaginatorModule]
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy {
  public displayedColumns: string[] = ['EventName', 'Sport', 'StartDate', 'EndDate', 'Venue'];
  public dataSource = new MatTableDataSource<Calendar>([]);
  public totalRecords = 0;
  public edition: string;
  public searchquery = '';

  private _paginator: MatPaginator;
  private dataLoadTrigger$ = new Subject<void>();
  private paginatorSubscription: Subscription;
  private queryParamsSubscription: Subscription;
  private dataSubscription: Subscription;

  @ViewChild(MatPaginator)
  set paginator(paginator: MatPaginator) {
    this._paginator = paginator;
    if (this._paginator) {
      // Unsubscribe from previous paginator subscription if it exists
      if (this.paginatorSubscription) {
        this.paginatorSubscription.unsubscribe();
      }
      // Only subscribe to page events once the paginator is available
      this.paginatorSubscription = this._paginator.page.pipe(
        tap(() => this.dataLoadTrigger$.next())
      ).subscribe();
    }
  }

  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService
  ) {
    // Initialize edition from snapshot for initial load
    this.edition = this.route.snapshot.queryParams['edition'] || '2028';
  }

  ngOnInit() {
    // Subscribe to queryParams changes to handle edition changes
    this.queryParamsSubscription = this.route.queryParams.pipe(
      distinctUntilChanged((prev, curr) => prev['edition'] === curr['edition']), // Only emit if edition changes
      tap(params => {
        const newEdition = params['edition'] || '2028';
        if (newEdition !== this.edition) {
          this.edition = newEdition;
          if (this._paginator) {
            this._paginator.pageIndex = 0; // Reset page when edition changes
          }
          this.dataLoadTrigger$.next(); // Trigger data load after edition potentially changes
        }
      })
    ).subscribe();

    // Main data loading pipeline triggered by dataLoadTrigger$
    this.dataSubscription = this.dataLoadTrigger$.pipe(
      startWith(undefined), // Trigger initial load when dataLoadTrigger$ is subscribed
      switchMap(() => {
        const pageIndex = this._paginator ? this._paginator.pageIndex : 0;
        const pageSize = this._paginator ? this._paginator.pageSize : 10;
        return this.sportservice.getcalendar(this.searchquery, pageIndex, pageSize, this.edition);
      })
    ).subscribe((calendardata: any) => {
      this.totalRecords = calendardata.total;
      const formattedCalendar = calendardata.calendar.map(element => {
        const sdate = new Date(element.startdate * 1000);
        const edate = new Date(element.enddate * 1000);
        element.startdate = sdate.toDateString();
        element.enddate = edate.toDateString();
        return element;
      });
      this.dataSource.data = formattedCalendar;
    }, error => {
      console.error('Error fetching calendar data:', error);
      this.totalRecords = 0;
      this.dataSource.data = [];
    });
  }

  ngAfterViewInit() {
    // Initial load is now handled by dataLoadTrigger$ in ngOnInit with startWith
    // No explicit action needed here for initial load
  }

  ngOnDestroy() {
    if (this.paginatorSubscription) {
      this.paginatorSubscription.unsubscribe();
    }
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}