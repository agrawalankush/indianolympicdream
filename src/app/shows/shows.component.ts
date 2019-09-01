import { Component, OnInit } from '@angular/core';
import { ShowsdataService } from './showsdata.service';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  public showsdata:any;
  public errmsg:string;
  public videoyoutube: string = "https://www.youtube.com/embed/";
  constructor(private showdataservice: ShowsdataService) { }

  ngOnInit() {
     this.getshowsdata();
  }
  public getshowsdata(){
    this.showdataservice.getshowsdata()
    .subscribe(
      (showsdata:any) =>{
        //console.log(sportsdata.data[0]);
        this.showsdata = showsdata.data;
      },
      (error) =>{
        this.errmsg = error.error;
        console.log(error);
      }
    )
  }
}
