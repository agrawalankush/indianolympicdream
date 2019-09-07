
import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { SportsdataService } from '../sportsdata.service';
import { SportDetails } from '../models/sport-details';

@Injectable({
  providedIn: 'root',
})
export class SportDetailsResolverService implements Resolve<SportDetails> {
  constructor(private sportservice: SportsdataService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SportDetails> | Observable<never> {
    let sportname = route.paramMap.get('sportname');

    return this.sportservice.getsports(sportname).pipe(
      take(1),
      mergeMap(sportdata => {
        if (sportdata) {
          return of(sportdata);
        } else { 
          // sport not found
          this.router.navigate(['./']);
          return EMPTY;
        }
      })
    );
  }
}