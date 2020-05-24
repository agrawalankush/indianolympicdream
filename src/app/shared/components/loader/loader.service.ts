import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from './loader';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }
  show() {
    // console.log('reached service show');
    this.loaderSubject.next({ show: true } as LoaderState);
  }
  hide() {
    // console.log('reached service hide');
    this.loaderSubject.next({ show: false } as LoaderState);
  }
}
