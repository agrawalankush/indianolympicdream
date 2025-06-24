import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { MatDialog } from '@angular/material/dialog';
import { EventsDialogComponent } from './events-dialog.component';
import { map, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'; // Added for MatDialog service

interface SportEvents {
  key: string;
  value: any[];
}

@Component({
    selector: 'app-sport-details',
    standalone: true, // Added
    templateUrl: './sport-details.component.html',
    styleUrls: ['./sport-details.component.scss'],
    imports: [
        CommonModule,
        RouterLink,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule
        // EventsDialogComponent is not directly in the template, so not needed in imports here.
        // Its TS import is sufficient for this.dialog.open(EventsDialogComponent)
    ]
})
export class SportDetailsComponent implements OnInit {
  sportsdetails: any;
  qualifiedAthletesString: string;
  selectedCategory: string | null = null;
  selectedEvents: any[] = [];

  readonly allsports = ['Archery', 'Athletics', 'Badminton', 'Boxing', 'Equestrian',
    'Fencing', 'Golf', 'Gymnastics', 'Hockey', 'Judo', 'Rowing', 'Shooting',
    'Sailing', 'Swimming', 'TableTennis', 'Tennis', 'Weightlifting', 'Wrestling'];

  private readonly categoryIcons: Record<string, string> = {
    men: 'man',
    women: 'woman',
    mixed: 'groups',
    unisex: 'wc'
  };

  constructor(
    private route: ActivatedRoute,
    private sportservice: SportsdataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('sportname')),
      switchMap(sportname => this.sportservice.getsports(sportname))
    ).subscribe(res => {
      this.sportsdetails = res[0];
      this.qualifiedAthletesString = JSON.stringify([this.sportsdetails.name]);
    });
  }

  getCategoryShorthand(category: string): string {
    return this.categoryIcons[category.toLowerCase()] || category.charAt(0).toUpperCase();
  }

  showEvents(category: SportEvents): void {
    this.selectedCategory = category.key;
    this.selectedEvents = category.value;

    this.dialog.open(EventsDialogComponent, {
      data: {
        events: this.selectedEvents,
        category: this.selectedCategory,
        sportName: this.sportsdetails.name
      },
      width: '90%',
      maxWidth: '800px'
    });
  }
}
