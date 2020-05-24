import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
// import { ShowsResolve } from '../models/app-models';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  public showsdata: any;
  public errmsg: string;
  public videoyoutube = 'https://www.youtube.com/embed/';
  // MatPaginator Inputs
  length: number;
  pageSize = 6;
  pageSizeOptions: number[] = [3, 6, 12, 24];
  // MatPaginator Output
  pageEvent: PageEvent;
  constructor(private route: ActivatedRoute, private sportservice: SportsdataService) { }

  ngOnInit() {
     // this.getshowsdata();
    this.sportservice.getshowsdata(0, 6)
    .subscribe(
      (res:any) => {
        this.showsdata = res.shows;
        this.length = res.total;
    },
      (error: any) => {
        // console.log(error);
        this.errmsg = error.error;
      });
  }
  handlePageEvent(e: PageEvent) {
   const index = e.pageIndex * e.pageSize;
   const size =  e.pageSize;
   this.sportservice.getshowsdata(index, size)
   .subscribe(
    (res: any) => {
      this.showsdata = res.shows;
      this.length = res.total;
  },
    (error) => {
      this.errmsg = error;
      // console.log(error);
    });
  }
  }
