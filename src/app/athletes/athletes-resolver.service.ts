import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { SportsdataService } from '../sportsdata.service';
// import { Athletes } from '../models/app-models';
@Injectable({
  providedIn: 'root'
})
export class AthletesResolverService implements Resolve<any> {
  constructor(private sportservice: SportsdataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {

    return this.sportservice.getathletes([],0,8).pipe(
      take(1),
      mergeMap(athletes => {
        if (athletes) {
          // console.log(athletes);
          return of(athletes);
        } else { 
          // sport not found
          this.router.navigate(['./']);
          return EMPTY;
        }
      })
    );
  }
}
