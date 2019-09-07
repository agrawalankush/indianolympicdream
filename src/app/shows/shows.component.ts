import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { Shows } from '../models/app-models';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  public showsdata:any;
  public errmsg:string;
  public videoyoutube: string = "https://www.youtube.com/embed/";
  constructor(private route:ActivatedRoute,private sportservice: SportsdataService) { }

  ngOnInit() {
     // this.getshowsdata();
     this.route.data
    .subscribe(
      (data: { showsdata: Shows[] }) => {
      this.showsdata = data.showsdata;
    },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      });
  }
  }
