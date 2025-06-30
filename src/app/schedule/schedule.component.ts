import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLinkActive, RouterLink } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf, NgFor, KeyValuePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { HumanizePipe } from '../shared/components/loader/pipes/humanize';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  imports: [MatToolbar, NgIf, RouterLinkActive, RouterLink, NgFor, MatDivider, KeyValuePipe, HumanizePipe]
})
export class ScheduleComponent implements OnInit, OnDestroy {
  schedule: any;
  getByDate: boolean;
  date: string;
  length: number;
  errmsg: string;
  sport: string;
  edition: string;
  allsports: string[] = [
    'Archery',
    'Athletics',
    'Badminton',
    'Boxing',
    'Equestrian',
    'Fencing',
    'Golf',
    'Gymnastics',
    'Hockey',
    'Judo',
    'Rowing',
    'Shooting',
    'Sailing',
    'Swimming',
    'TableTennis',
    'Tennis',
    'Weightlifting',
    'Wrestling'
  ];
  alldates: string[] = [
    '24July',
    '25July',
    '26July',
    '27July',
    '28July',
    '29July',
    '30July',
    '31July',
    '01Aug',
    '02Aug',
    '03Aug',
    '04Aug',
    '05Aug',
    '06Aug',
    '07Aug',
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private sportservice: SportsdataService) {
  }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        const newEdition = params.edition || '2028';
        if (this.edition !== newEdition) {
          this.edition = newEdition;
          // Re-fetch data when edition changes
          if (params.sport === undefined) {
            this.getByDate = true;
            this.sport = '';
            this.date = params.date;
            this.getScheduleByDate(params.date, this.edition);
          } else if (params.date === undefined) {
            this.getByDate = false;
            this.date = '';
            this.sport = params.sport;
            this.getSchedule(params.sport, this.edition);
          }
        } else if (this.edition === newEdition) { // Initial load or other query param changes
          if (params.sport === undefined) {
            this.getByDate = true;
            this.sport = '';
            this.date = params.date;
            this.getScheduleByDate(params.date, this.edition);
          } else if (params.date === undefined) {
            this.getByDate = false;
            this.date = '';
            this.sport = params.sport;
            this.getSchedule(params.sport, this.edition);
          }
        }
      }
      );
  }
  originalOrder() { return 0; }
  selectedSport(sport: string) {
    console.log(sport);
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { sport: sport, edition: this.edition },
        queryParamsHandling: 'merge'
      });
  }
  getSchedule(selectedport: string, edition: string) {
    this.sportservice.getschedule(selectedport, edition)
      .subscribe(
        (res: any) => {
          this.schedule = res.schedule;
          this.length = res.total;
        },
        (error: any) => {
          this.errmsg = error.error;
        });
  }
  getScheduleByDate(date: string, edition: string) {
    this.getByDate = true;
    this.sportservice.getschedulebydate(date, edition)
      .subscribe(
        (res: any) => {
          this.schedule = res.schedule;
          this.length = res.total;
        },
        (error: any) => {
          this.errmsg = error.error;
        });
  }
  showEvents(sport: string, events: any, Bydate?: string): void {
    if (Bydate) {
      sport = Bydate;
    }
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: { sportname: sport, events: events },
      panelClass: 'custom-dialog'
    });
  }
  ngOnDestroy() {
  }

}