import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  catchError,
  finalize
} from 'rxjs/operators';
import { SportsService } from '../sports.service';
export interface Calendar {
    sportname: string;
    event: Array<{name: string, startdate: number, enddate: number, venue: string}>;
  }
export class CalendarDataSource implements DataSource<Calendar> {

    private calendarSubject = new BehaviorSubject<Calendar[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public length: number;
    public loading$ = this.loadingSubject.asObservable();

    constructor(private sportservice: SportsService) {}

    connect(collectionViewer: CollectionViewer): Observable<Calendar[]> {
        return this.calendarSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.calendarSubject.complete();
        this.loadingSubject.complete();
    }

    loadCalendar(filter: string, pageIndex: number, pageSize: number) {

        this.loadingSubject.next(true);

        this.sportservice.getcalendar(filter, pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((calendar: any) => {
            calendar.data.calendar.forEach(element => {
                      let sdate = new Date(element.startdate*1000);
                      let edate = new Date(element.enddate*1000);
                      element.startdate = sdate.toDateString();
                      element.enddate = edate.toDateString();
                    });
                    this.length = calendar.data.total;
                   this.calendarSubject.next(calendar.data.calendar);
        },
        (error) => {
                 console.log(error);
            }
        );
    }    
}