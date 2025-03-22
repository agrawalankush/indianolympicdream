import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
// import { Athletes} from '../models/app-models';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UntypedFormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable, of as observableOf } from 'rxjs';
import { map, startWith, catchError, finalize } from 'rxjs/operators';
import { MatChipGrid } from '@angular/material/chips';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {
  public errmsg: string;
  public athletes: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // MatPaginator Inputs
  length: number;
  pageSize = 8;
  pageSizeOptions: number[] = [4, 8, 16, 32];
  // MatPaginator Output
  pageEvent: PageEvent;
  pageIndex = 0;
  // Search autocomplete Inputs
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  sportCtrl = new UntypedFormControl();
  filteredSports: Observable<any>;
  sports: string[] = [];
  allsports: string[] = [
    'Archery',
    'Athletics',
    'Badminton',
    'Boxing',
    'Equestrian',
    'Fencing',
    'Golf',
    'Gymnastics',
    'Hockey',
    'Judo',
    'Rowing',
    'Shooting',
    'Sailing',
    'Swimming',
    'TableTennis',
    'Tennis',
    'Weightlifting',
    'Wrestling'
  ];

  @ViewChild('sportInput') sportInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild('chipGrid') chipGrid: MatChipGrid;
  constructor(private route: ActivatedRoute, private router: Router, private sportservice: SportsdataService) {
    this.filteredSports = this.sportCtrl.valueChanges.pipe(
      map((sport: string | null) => sport ? this._filter(sport) : this.getallsports()));
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        if (Object.keys(params).length === 0 && params.constructor === Object) {
          this.SearchAthletes("[]", "0", "8");
        } else {
          this.sports = JSON.parse(params.sports);
          // this.pageIndex = parseInt(params.pageIndex);
          // this.pageSize = parseInt(params.pazeSize);
          this.SearchAthletes(params.sports, params.pageIndex, params.pazeSize);
        }
      }
      );

  }
  get queryParams() {
    const index = this.paginator.pageIndex * this.paginator.pageSize;
    const size = this.paginator.pageSize;
    const sports = JSON.stringify(this.sports);
    const queryParams: Params = { sports: sports, pageIndex: index, pazeSize: size };
    return queryParams;
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.sports.length > 0) {
      const filteredallsports = this.allsports.filter(sport => !(this.sports.includes(sport)));
      return filteredallsports.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
    } else {
      return this.allsports.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
    }
  }
  getallsports() {
    if (this.sports) {
      // console.log(this.allsports.filter(sport => !(this.sports.includes(sport))))
      return this.allsports.filter(sport => !(this.sports.includes(sport)));
    } else {
      return this.allsports.slice();
    }
  }
  prepareQueryUrl() {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: this.queryParams,
        // queryParamsHandling: 'merge'
      });
  }
  handlePageEvent(e: PageEvent) {
    // console.log(e);
    this.prepareQueryUrl();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.sports.push(event.option.viewValue);
    this.sportInput.nativeElement.value = '';
    this.sportCtrl.setValue(null);
    this.paginator.pageIndex = 0;
    this.prepareQueryUrl();
  }

  remove(sport: string): void {
    const index = this.sports.indexOf(sport);
    if (index >= 0) {
      this.sports.splice(index, 1);
      this.paginator.pageIndex = 0;
      this.prepareQueryUrl();
    }
  }
  public SearchAthletes(selectedsports: any, pageIndex: string, pageSize: string) {
    this.sportservice.getathletes(selectedsports, pageIndex, pageSize)
      .subscribe(
        (res: any) => {
          // console.log(res);
          this.athletes = res.athletes;
          this.length = res.total;
        },
        (error: any) => {
          // console.log(error);
          this.errmsg = error.error;
        });
  }
}
