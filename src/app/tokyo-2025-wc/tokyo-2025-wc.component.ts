import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CustomDaySelectComponent } from '../shared/components/custom-day-select/custom-day-select.component';
import { CommonModule, Location } from '@angular/common';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tokyo-2025-wc',
  imports: [MatToolbar, MatButtonModule, RouterOutlet, RouterLink, MatIcon, CustomDaySelectComponent, CommonModule],
  templateUrl: './tokyo-2025-wc.component.html',
  styleUrl: './tokyo-2025-wc.component.scss'
})
export class Tokyo2025WcComponent {
  eventName: string;
  sex: string;
  
  constructor(public router: Router, private activatedRoute: ActivatedRoute, private location: Location) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['eventName']) {
            return {
              eventName: child.snapshot.data['eventName'],
              sex: child.snapshot.params['sex']
            };
          } else if (child.snapshot.params && child.snapshot.params['eventName']) {
            return {
              eventName: child.snapshot.params['eventName'],
              sex: child.snapshot.params['sex']
            };
          } else {
            return null;
          }
        }
        return null;
      })
    ).subscribe((data: any) => {
      if (data) {
        this.eventName = data.eventName;
        this.sex = data.sex;
      } else {
        this.eventName = null;
        this.sex = null;
      }
    });
  }

  isScheduleActive(): boolean {
    return this.router.url.includes('/schedule') || this.router.url.includes('/event-details');
  }

  isEventDetailsActive(): boolean {
    return this.router.url.includes('/event-details');
  }
      goBack(): void {
      this.location.back();
    }
}
