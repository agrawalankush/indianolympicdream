import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { SportsdataService } from '../sportsdata.service';
// import { Shows } from '../models/app-models';
@Injectable({
  providedIn: 'root'
})
export class ShowsResolverService implements Resolve<any> {
  constructor(private sportservice: SportsdataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {

    return this.sportservice.getshowsdata(0, 6).pipe(
      take(1),
      mergeMap(showsdata => {
        if (showsdata) {
          return of(showsdata);
        } else {
          // sport not found
          this.router.navigate(['./']);
          return EMPTY;
        }
      })
    );
  }
}
