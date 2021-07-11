import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventDetailsComponent } from '../event-details/event-details.component';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  schedule: any;
  getByDate: boolean;
  date: string;
  length: number;
  errmsg: string;
  sport: string;
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
    private route:ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private sportservice:SportsdataService) {
    }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        if(Object.keys(params).length === 0 && params.constructor === Object){
          this.getSchedule('');
        } else {
          // console.log(params, params.date, params.sport);
        if(params.sport === undefined){
          this.getByDate = true;
          this.sport = '';
          this.date = params.date;
          this.getScheduleByDate(params.date);
       } else if(params.date === undefined) {
        this.getByDate = false;
        this.date = '';
        this.sport = params.sport;
        this.getSchedule(params.sport);
       }
        // this.pageIndex = parseInt(params.pageIndex);
        // this.pageSize = parseInt(params.pazeSize);

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
        queryParams: { sport: sport},
        queryParamsHandling: 'merge'
      });
  }
  getSchedule(selectedport: string) {
    this.sportservice.getschedule(selectedport)
    .subscribe(
     (res:any) => {
       // console.log(res);
       this.schedule = res.schedule;
       this.length = res.total;
   },
     (error:any) =>{
       // console.log(error);
       this.errmsg = error.error;
     });
  }
  getScheduleByDate(date: string) {
    this.getByDate = true;
    this.sportservice.getschedulebydate(date)
    .subscribe(
     (res:any) => {
       // console.log(res);
       this.schedule = res.schedule;
       this.length = res.total;
   },
     (error:any) =>{
       // console.log(error);
       this.errmsg = error.error;
     });
  }
  showEvents(sport: string,events: any, Bydate?: string): void {
    if(Bydate) {
      sport = Bydate;
    }
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      width: '80%',
      height: '80%',
      data: {sportname: sport, events: events},
      panelClass: 'custom-dialog'
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  ngOnDestroy() {
  }

}
