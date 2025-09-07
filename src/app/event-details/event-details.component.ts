
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

interface Athlete {
  federation: string;
  date_of_birth: string;
  id: string;
  name: string;
  personal_best: string;
  world_ranking: string;
  season_best: string;
}

interface EventData {
  athletes: Athlete[];
  summary: string;
}

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventId: string;
  eventData: EventData;
  displayedColumns: string[] = ['name', 'federation', 'personal_best', 'season_best', 'world_ranking'];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    // this.http.get<any>('/assets/docs/entry_list.json').subscribe(data => {
    //   this.eventData = data[this.eventId];
    // });
  }
}
