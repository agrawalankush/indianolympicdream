import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CustomDaySelectComponent } from '../shared/components/custom-day-select/custom-day-select.component';

@Component({
  selector: 'app-tokyo-2025-wc',
  imports: [MatToolbar, MatButtonModule, RouterOutlet, RouterLink, MatIcon, CustomDaySelectComponent],
  templateUrl: './tokyo-2025-wc.component.html',
  styleUrl: './tokyo-2025-wc.component.scss'
})
export class Tokyo2025WcComponent {
  
  constructor(public router: Router) { }

  isScheduleActive(): boolean {
    return this.router.url.endsWith('/schedule');
  }
}
