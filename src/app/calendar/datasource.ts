import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, of } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { SportsdataService } from "../sportsdata.service";
export interface Calendar {
  sportname: string;
  event: Array<{ name: string; startdate: number; enddate: number; venue: string }>;
}
export class CalendarDataSource implements DataSource<Calendar> {
  public calendarSubject = new BehaviorSubject<Calendar[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public length: number;
  public loading$ = this.loadingSubject.asObservable();

  constructor(private sportservice: SportsdataService) {}

  connect(collectionViewer: CollectionViewer): Observable<Calendar[]> {
    return this.calendarSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.calendarSubject.complete();
    this.loadingSubject.complete();
  }

  loadCalendar(
    filter: string,
    pageIndex: number,
    pageSize: number,
    edition: string
  ) {
    this.loadingSubject.next(true);

    this.sportservice
      .getcalendar(filter, pageIndex, pageSize, edition)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        (calendardata: any) => {
          calendardata.calendar.forEach((element) => {
            const sdate = new Date(element.startdate * 1000);
            const edate = new Date(element.enddate * 1000);
            element.startdate = sdate.toDateString();
            element.enddate = edate.toDateString();
          });
          this.length = calendardata.total;
          this.calendarSubject.next(calendardata.calendar);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}