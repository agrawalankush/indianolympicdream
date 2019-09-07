import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import {PageEvent} from '@angular/material/paginator';
// import { Athletes} from '../models/app-models';
import { tap } from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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
  
  // Search autocomplete Inputs
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  sportCtrl = new FormControl();
  filteredSports: Observable<any>;
  sports: string[] = [];
  allsports: string[] = ['Archery', 'Athletics', 'Boxing', 'Equestrian', 'Fencing','Golf', 'Gymnastics', 'Hockey',
                         'Judo','Rowing','Shooting', 'TableTennis','Tennis', 'Weightlifting', 'Wrestling'];

  @ViewChild('sportInput', {static: false}) sportInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  constructor(private route:ActivatedRoute,private sportservice:SportsdataService) { 
    this.filteredSports = this.sportCtrl.valueChanges.pipe(
      startWith(null),
      map((sport: string | null) => sport ? this._filter(sport) : this.getallsports()));
  }

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
   getallsports() { 
   if(this.sports){ 
   // console.log(this.allsports.filter(sport => !(this.sports.includes(sport))))  
   return this.allsports.filter(sport => !(this.sports.includes(sport)));
  } else {
   return this.allsports.slice();
  }
   }
   remove(sport: string): void {
    const index = this.sports.indexOf(sport);

    if (index >= 0) {
      this.sports.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.sports.push(event.option.viewValue);
    this.sportInput.nativeElement.value = '';
    this.sportCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if(this.sports.length > 0) {
      let filteredallsports = this.allsports.filter(sport => !(this.sports.includes(sport)));
      return filteredallsports.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
    } else {
    return this.allsports.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
  }
  }
}
