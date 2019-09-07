import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllSports} from '../models/app-models';
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
      (data: { allsportsdata: AllSports[] }) => {
      this.allsports = data.allsportsdata;
    },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      });
  }
}
