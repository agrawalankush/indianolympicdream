import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { LoaderState } from './loader';
import { CommonModule } from '@angular/common'; // Changed
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Changed
@Component({
    selector: 'app-loader',
    standalone: true, // Added
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css'],
    imports: [CommonModule, MatProgressBarModule] // Changed
})
export class LoaderComponent implements OnInit, OnDestroy {
  // show = false;
  public show: boolean;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    // console.log('reached loader comp');
    this.subscription = this.loaderService.loaderState
    // .pipe(
    //   delay(0),
    // )
    .subscribe((state: LoaderState) => {
      this.show = state.show;
      // console.log(this.show);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
