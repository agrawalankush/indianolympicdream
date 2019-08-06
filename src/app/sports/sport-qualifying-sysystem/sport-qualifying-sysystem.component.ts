import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';
@Component({
  selector: 'app-sport-qualifying-sysystem',
  templateUrl: './sport-qualifying-sysystem.component.html',
  styleUrls: ['./sport-qualifying-sysystem.component.scss']
})
export class SportQualifyingSysystemComponent implements OnInit {

  public sportname:string;
  public pdfSrc:string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    // this.sportname = this.route.snapshot.paramMap.get('name');
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.sportname = params.get('sportname');
      //console.log(this.sportname);
      this.pdfSrc = `../../assets/The_Olympic_Dream/Qualifications/${this.sportname}/TOKYO_2020_${this.sportname}.pdf`;
    });
  }

}
