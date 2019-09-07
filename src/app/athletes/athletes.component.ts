import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { MatPaginator } from '@angular/material';
import {PageEvent} from '@angular/material/paginator';
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
  // MatPaginator Inputs
  length: number;
  pageSize = 8;
  pageSizeOptions: number[] = [4, 8, 16,32];

  // MatPaginator Output
  pageEvent: PageEvent;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private route:ActivatedRoute,private sportservice:SportsdataService) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: { athletesdata: any}) => {
      // console.log(data.athletesdata);
      this.athletes = data.athletesdata.qualifiedathletes.athletes;
      this.length = data.athletesdata.qualifiedathletes.total;
    },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      });
  }
  handlePageEvent(e: PageEvent) {
    let index = e.pageIndex * e.pageSize;
    let size =  e.pageSize;
    this.sportservice.getathletes(index,size)
    .subscribe(
     (res:any) => {
       this.athletes = res.qualifiedathletes.athletes;
       this.length = res.qualifiedathletes.total;
   },
     (error) =>{
       this.errmsg = error.error;
       console.log(error);
     });
   }
}
