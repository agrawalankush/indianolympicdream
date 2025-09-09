import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsComponent } from '../../event-details/event-details.component';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf, NgFor, KeyValuePipe, DatePipe, JsonPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { HumanizePipe } from '../../shared/components/loader/pipes/humanize';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { catchError } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import { Tokyo2025WcDataService } from '../tokyo-2025-wc-data.service';
import { DateFilterService } from '../../shared/services/date-filter.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // Import Router

// Define interfaces based on the provided schedule data structure
interface Discipline {
  _id: string;
  name: string;
  typeName: string;
  typeOrder: number;
  order: number;
  nameUrlSlug: string;
  __typename: string;
}

interface IndianAthlete {
  name: string;
  id: number;
}

interface EventPhase {
  _id: string;
  id: number;
  phaseName: string;
  eventID: number;
  phaseDateAndTime: string;
  sexCode: string;
  unitName: string | null;
  unitTypeName: string | null;
  discipline: Discipline;
  isStartlistPublished: boolean;
  isResultPublished: boolean;
  isPhaseSummaryPublished: boolean;
  combinedDisciplineOrder: number;
  phaseOrder: number;
  phaseSessionName: string;
  phaseSessionOrder: number;
  status: number;
  isPointsPublished: boolean;
  phaseNameUrlSlug: string;
  sexNameUrlSlug: string;
  __typename: string;
  isIndianEvent?: boolean;
  indianAthletes?: IndianAthlete[];
}

interface ScheduleApiResponse {
  schedule: EventPhase[];
  total: number;
}

@Component({
  selector: 'app-tokyo-2025-wc-schedule',
  standalone: true,
  templateUrl: './tokyo-2025-wc-schedule.component.html',
  styleUrls: ['./tokyo-2025-wc-schedule.component.scss'],
  imports: [
    MatToolbar,
    NgIf,
    NgFor,
    MatDivider,
    KeyValuePipe,
    HumanizePipe,
    MatButtonModule,
    MatIconModule,
    DatePipe,
    JsonPipe
  ]
})
export class Tokyo2025WcScheduleComponent implements OnInit, OnDestroy {
  schedule: EventPhase[];
  fullSchedule: EventPhase[]; // Store the full schedule
  errmsg: string;
  length: number;
  private dateFilterSubscription: Subscription;

  constructor(
    private tokyo2025WcDataService: Tokyo2025WcDataService,
    public dialog: MatDialog,
    private dateFilterService: DateFilterService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.getTokyo2025WcSchedule();

    this.dateFilterSubscription = this.dateFilterService.selectedDate$.subscribe(selectedDate => {
      this.filterScheduleByDate(selectedDate);
    });
  }

  getTokyo2025WcSchedule() {
    this.schedule = null; // Clear previous schedule
    this.tokyo2025WcDataService.getSchedule()
      .pipe(
        catchError((error) => {
          this.errmsg = error.message || 'An error occurred';
          return observableOf({ schedule: [], total: 0 });
        })
      )
      .subscribe((res: ScheduleApiResponse) => {
        this.fullSchedule = res.schedule; // Store the full schedule
        this.schedule = res.schedule; // Initially display the full schedule
        this.length = res.total;
        this.dateFilterService.selectedDate$.subscribe(selectedDate => {
          this.filterScheduleByDate(selectedDate);
        });
      });
  }

  filterScheduleByDate(selectedDate: Date | null): void {
    if (!this.fullSchedule) {
      return; // No schedule to filter yet
    }

    if (!selectedDate) {
      this.schedule = this.fullSchedule; // Show full schedule if no date is selected
    } else {
      // Normalize selectedDate to the start of the day
      const normalizedSelectedDate = new Date(selectedDate);
      normalizedSelectedDate.setHours(0, 0, 0, 0);

      this.schedule = this.fullSchedule.filter(event => {
        // Normalize event date to the start of the day
        const eventDate = new Date(event.phaseDateAndTime);
        eventDate.setHours(0, 0, 0, 0);

        return eventDate.getTime() === normalizedSelectedDate.getTime();
      });
    }
  }

  showEvents(eventPhase: EventPhase): void {
    const sexCode = eventPhase.sexCode;
    const eventId = eventPhase.discipline._id;
    this.router.navigate([`/tokyo-2025-wc/event-details/${sexCode}${eventId}`, { eventName: eventPhase.discipline.name, sex: sexCode, stage: eventPhase?.phaseNameUrlSlug, unitName: eventPhase?.unitName }]);
  }

  ngOnDestroy() {
    if (this.dateFilterSubscription) {
      this.dateFilterSubscription.unsubscribe();
    }
  }
}