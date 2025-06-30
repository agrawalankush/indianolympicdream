import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { SportsdataService } from '../sportsdata.service';
import { MatPaginatorModule, PageEvent, MatPaginator } from '@angular/material/paginator'; // Added MatPaginator type
// import { Athletes} from '../models/app-models';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete'; // Added MatAutocomplete type
import { Observable, of as observableOf } from 'rxjs';
import { map, startWith, catchError, finalize } from 'rxjs/operators';
import { MatChipsModule, MatChipGrid } from '@angular/material/chips'; // Added MatChipGrid type
import { MatInputModule } from '@angular/material/input'; // Corrected to MatInputModule
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Changed
import { MatCardModule } from '@angular/material/card'; // Changed

interface Athlete {
  name: string;
  sportname: string;
  event: string;
  index: string; // Add this field
  image: string;
  webpimage: string;
  qualificationEvent: string;
  date_qualified: number;
}

interface AthleteResponse {
  athletes: Athlete[];
  total: number;
}

@Component({
  selector: 'app-athletes',
  standalone: true,
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class AthletesComponent implements OnInit {
  public errmsg: string;
  public athletes: Athlete[];
  public edition: string;
  @ViewChild(MatPaginator) paginator: MatPaginator; // Types are now imported
  // MatPaginator Inputs
  length: number;
  pageSize = 24;
  pageSizeOptions: number[] = [24, 48, 96];
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
  @ViewChild('auto') matAutocomplete: MatAutocomplete; // Types are now imported
  @ViewChild('chipGrid') chipGrid: MatChipGrid; // Types are now imported
  constructor(private route: ActivatedRoute, private router: Router, private sportservice: SportsdataService) {
    this.filteredSports = this.sportCtrl.valueChanges.pipe(
      map((sport: string | null) => sport ? this._filter(sport) : this.getallsports()));
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const newEdition = params.edition || '2028';
        if (this.edition !== newEdition) {
          this.edition = newEdition;
          this.sports = []; // Reset sports when edition changes
          this.SearchAthletes("[]", "0", "24", this.edition);

        }
        if (params.sports) {
          this.sports = JSON.parse(params.sports);
          this.SearchAthletes(params.sports, params.pageIndex, params.pazeSize, this.edition);
        }
      }
      );
  }
  get queryParams() {
    const index = this.paginator.pageIndex * this.paginator.pageSize;
    const size = this.paginator.pageSize;
    const sports = JSON.stringify(this.sports);
    const queryParams: Params = { sports: sports, pageIndex: index, pazeSize: size, edition: this.edition };
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
  public SearchAthletes(selectedsports: string, pageIndex: string, pageSize: string, edition: string) {
    this.sportservice.getathletes(selectedsports, pageIndex, pageSize, edition)
      .pipe(
        catchError((error) => {
          this.errmsg = error.message || 'An error occurred';
          return observableOf({ athletes: [], total: 0 });
        })
      )
      .subscribe((res: AthleteResponse) => {
        this.athletes = res.athletes;
        this.length = res.total;
      });
  }
}