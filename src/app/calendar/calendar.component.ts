import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SportsdataService } from '../sportsdata.service';
import { Calendar } from '../models/app-models';
import { switchMap, startWith, distinctUntilChanged, finalize, tap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule, ScrollingModule, MatProgressSpinnerModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class CalendarComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['EventName', 'Sport', 'StartDate', 'EndDate', 'Venue'];
  public dataSource = new MatTableDataSource<Calendar>([]);
  public totalRecords = 0;
  public edition: string;
  public searchquery = '';
  public currentPage = 0;
  public pageSize = 15;
  public isLoading = false;
  public hasMoreData = true;

  private dataLoadTrigger$ = new Subject<void>();
  private queryParamsSubscription: Subscription;
  private dataSubscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportservice: SportsdataService
  ) {
    this.edition = this.route.snapshot.queryParams['edition'] || '2028';
  }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.pipe(
      distinctUntilChanged((prev, curr) => prev['edition'] === curr['edition']),
      tap(params => {
        const newEdition = params['edition'] || '2028';
        if (newEdition !== this.edition) {
          this.edition = newEdition;
          this.resetAndLoad();
        }
      })
    ).subscribe();

    this.dataSubscription = this.dataLoadTrigger$.pipe(
      startWith(undefined),
      switchMap(() => {
        this.isLoading = true;
        return this.sportservice.getcalendar(this.searchquery, this.currentPage, this.pageSize, this.edition).pipe(
          finalize(() => this.isLoading = false)
        );
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
      if (this.currentPage === 0) {
        this.dataSource.data = formattedCalendar;
      } else {
        this.dataSource.data = [...this.dataSource.data, ...formattedCalendar];
      }
      this.hasMoreData = this.dataSource.data.length < this.totalRecords;
    }, error => {
      console.error('Error fetching calendar data:', error);
      this.totalRecords = 0;
      this.dataSource.data = [];
      this.hasMoreData = false;
    });
  }

  /*
  onScroll(event: any) {
    const tableViewHeight = event.target.offsetHeight; // viewport
    const tableScrollHeight = event.target.scrollHeight; // length of all content
    const scrollLocation = event.target.scrollTop; // how far user has scrolled

    const limit = tableScrollHeight - tableViewHeight - 200;
    if (scrollLocation > limit) {
      this.loadMoreData();
    }
  }
  */

  loadMoreData() {
    if (!this.isLoading && this.hasMoreData) {
      this.currentPage++;
      this.dataLoadTrigger$.next();
    }
  }

  resetAndLoad() {
    this.currentPage = 0;
    this.dataSource.data = [];
    this.hasMoreData = true;
    this.dataLoadTrigger$.next();
  }

  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  onOlympicsChange(selection: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { edition: selection },
      queryParamsHandling: 'merge'
    });
  }
}