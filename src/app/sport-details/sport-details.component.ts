import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { SportDetails } from '../models/app-models';
@Component({
  selector: 'app-sport-details',
  templateUrl: './sport-details.component.html',
  styleUrls: ['./sport-details.component.scss']
})
export class SportDetailsComponent implements OnInit {
  public errmsg: string;
  public sportname:string;
  public sportsdetails:any;
  allsports: string[] = ['Archery', 'Athletics','Badminton', 'Boxing', 'Equestrian', 'Fencing','Golf', 'Gymnastics', 'Hockey',
                         'Judo','Rowing','Shooting', 'Sailing', 'TableTennis','Tennis', 'Weightlifting', 'Wrestling'];
  public displayedColumns: string[] = ['Event', 'EntryStandard', 'NR'];
  constructor(
    private route: ActivatedRoute,
    private sportservice:SportsdataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:any) => {
      // console.log(params.params.sportname);
      this.sportservice.getsports(params.params.sportname)
    .subscribe(
      (res: any) => {
      // console.log(res);
      this.sportsdetails = res[0];
    });
    })
  }
}
