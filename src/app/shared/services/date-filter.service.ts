import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateFilterService {
  private selectedDateSubject = new BehaviorSubject<Date | null>(null);
  selectedDate$: Observable<Date | null> = this.selectedDateSubject.asObservable();

  constructor() { }

  setDate(date: Date | null) {
    this.selectedDateSubject.next(date);
  }

  getDate(): Observable<Date | null> {
    return this.selectedDateSubject.asObservable();
  }
}
