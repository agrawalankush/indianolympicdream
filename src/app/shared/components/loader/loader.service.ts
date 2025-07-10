import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderState {
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  private showTimer: any;
  private hideTimer: any;
  private loadingStartTime: number = 0;
  private readonly MIN_DISPLAY_TIME = 500; // ms
  private readonly DEBOUNCE_TIME = 200; // ms

  constructor() { }

  show() {
    clearTimeout(this.hideTimer);
    this.showTimer = setTimeout(() => {
      this.loadingStartTime = Date.now();
      this.loaderSubject.next({ show: true });
    }, this.DEBOUNCE_TIME);
  }

  hide() {
    clearTimeout(this.showTimer);

    const loadingDuration = Date.now() - this.loadingStartTime;

    if (this.loadingStartTime > 0 && loadingDuration < this.MIN_DISPLAY_TIME) {
      const remainingTime = this.MIN_DISPLAY_TIME - loadingDuration;
      this.hideTimer = setTimeout(() => {
        this.loaderSubject.next({ show: false });
        this.loadingStartTime = 0;
      }, remainingTime);
    } else {
      this.loaderSubject.next({ show: false });
      this.loadingStartTime = 0;
    }
  }
}
