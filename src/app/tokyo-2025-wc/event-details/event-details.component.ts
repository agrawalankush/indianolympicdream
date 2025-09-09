
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Tokyo2025WcDataService } from '../tokyo-2025-wc-data.service';
import { Observable } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { tap } from 'rxjs/operators';

interface Athlete {
  federation: string;
  date_of_birth: string;
  id: string;
  name: string;
  personal_best: string;
  world_ranking: string;
  season_best: string;
}

interface EventDetails {
  _id: string;
  id: string;
  phaseName: string;
  athletes: Athlete[];
  dataSource: MatTableDataSource<Athlete>;
  summary: string;
}

interface EventData {
  eventDetails: EventDetails[];
}

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatExpansionModule, TitleCasePipe],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventId: string;
  eventName: string;
  eventData$: Observable<EventData>;
  displayedColumns: string[] = ['name', 'federation', 'season_best', 'personal_best', 'world_ranking'];
  columnNames: { [key: string]: string } = {
    'name': 'Name',
    'federation': 'Fed',
    'season_best': 'SB',
    'personal_best': 'PB',
    'world_ranking': 'Ranking'
  };
  stage: string;
  unitName: string;

  constructor(private route: ActivatedRoute, private tokyo2025WcDataService: Tokyo2025WcDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];
      this.eventName = params['eventName'];
      this.stage = params['stage'];
      this.unitName = params['unitName'];
      this.eventData$ = this.tokyo2025WcDataService.getEventDetails(this.eventId, this.stage, this.unitName).pipe(
        tap(data => {
          data.eventDetails.forEach(eventDetail => {
            eventDetail.dataSource = new MatTableDataSource(eventDetail.athletes);
          });
        })
      );
    });
  }

  getDisplayedColumns(athletes: Athlete[]): string[] {
    if (athletes && athletes.length > 0) {
      return Object.keys(athletes[0]);
    }
    return [];
  }

  getColumnName(column: string): string {
    return this.columnNames[column] || column;
  }
}
