import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllSportsResolved } from '../models/app-models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public errmsg:string;
  public allsports: any;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: { allsportsdata: AllSportsResolved[] }) => {
      this.allsports = data.allsportsdata;
    });
  }
}
