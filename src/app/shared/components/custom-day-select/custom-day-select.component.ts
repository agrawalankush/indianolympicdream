import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterService } from '../../services/date-filter.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-day-select',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './custom-day-select.component.html',
  styleUrls: ['./custom-day-select.component.scss']
})
export class CustomDaySelectComponent implements OnInit {
  availableDates: Date[] = [];
  selectedDayLabel: string = 'Full Schedule';

  constructor(private dateFilterService: DateFilterService) {
    // Populate availableDates from September 13th to September 21st, 2025
    const startDate = new Date(2025, 8, 13); // September 13, 2025 (Month is 0-indexed)
    const endDate = new Date(2025, 8, 21);   // September 21, 2025

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      this.availableDates.push(new Date(d));
    }
  }

  ngOnInit() {
    // Optionally, subscribe to service to update label if initial state changes
    this.dateFilterService.selectedDate$.subscribe(date => {
      if (date) {
        this.selectedDayLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      } else {
        this.selectedDayLabel = 'All Days';
      }
    });
  }

  onDaySelected(date: Date | null) {
    this.dateFilterService.setDate(date);
  }
}
