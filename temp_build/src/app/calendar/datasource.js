"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarDataSource = void 0;
const rxjs_1 = require("rxjs");
const rxjs_2 = require("rxjs");
const operators_1 = require("rxjs/operators");
class CalendarDataSource {
    constructor(sportservice) {
        this.sportservice = sportservice;
        this.calendarSubject = new rxjs_2.BehaviorSubject([]);
        this.loadingSubject = new rxjs_2.BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    connect(collectionViewer) {
        return this.calendarSubject.asObservable();
    }
    disconnect(collectionViewer) {
        this.calendarSubject.complete();
        this.loadingSubject.complete();
    }
    loadCalendar(filter, pageIndex, pageSize) {
        this.loadingSubject.next(true);
        this.sportservice.getcalendar(filter, pageIndex, pageSize).pipe((0, operators_1.catchError)(() => (0, rxjs_1.of)([])), (0, operators_1.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((calendardata) => {
            calendardata.calendar.forEach(element => {
                const sdate = new Date(element.startdate * 1000);
                const edate = new Date(element.enddate * 1000);
                element.startdate = sdate.toDateString();
                element.enddate = edate.toDateString();
            });
            this.length = calendardata.total;
            this.calendarSubject.next(calendardata.calendar);
        }, (error) => {
            console.log(error);
        });
    }
}
exports.CalendarDataSource = CalendarDataSource;
