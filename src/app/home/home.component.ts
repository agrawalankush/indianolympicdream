import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SportsdataService } from '../sportsdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public errmsg:string;
  public allsports: any;
  
  constructor(private alldataservice: SportsdataService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.alldataservice.getallsports()
    .subscribe(
      (sportsdata:any) =>{
        // console.log(sportsdata.data[0]);
        this.allsports = sportsdata.data;
      },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      }
    )
  }
}
