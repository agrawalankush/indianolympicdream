import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { MatPaginator } from '@angular/material';
// import { Athletes} from '../models/app-models';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit{
  public errmsg: string;
  public athletes: any;
  public totalathletes;
  public searchquery = '';
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private route:ActivatedRoute,private sportservice:SportsdataService) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: { athletesdata: any}) => {
      // console.log(data.athletesdata);
      this.athletes = data.athletesdata.qualifiedathletes.athletes;
    },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      });
  }
}
