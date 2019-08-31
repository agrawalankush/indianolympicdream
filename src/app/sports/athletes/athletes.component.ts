import { Component, OnInit, ViewChild } from '@angular/core';
import { SportsService } from '../sports.service';
import { MatPaginator } from '@angular/material';
@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {
  public errmsg: string;
  public calendar: any;
  public searchquery = '';
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private sportservice:SportsService) { }

  ngOnInit() {
  }

}
