
// import { Injectable }             from '@angular/core';
// import {
//   Router, Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot
// }                                 from '@angular/router';
// import { Observable, of, EMPTY }  from 'rxjs';
// import { mergeMap, take }         from 'rxjs/operators';

// import { SportsdataService } from '../sportsdata.service';
// import { AllSports } from '../models/app-models';

// @Injectable({
//   providedIn: 'root'
// })
// export class AllSportsResolverService implements Resolve<AllSports[]> {
//   constructor(private sportservice: SportsdataService, private router: Router) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AllSports[]> | Observable<never> {

//     return this.sportservice.getallsports().pipe(
//       take(1),
//       mergeMap(allsports => {
//         if (allsports) {
//           return of(allsports);
//         } else {
//           // sport not found
//           this.router.navigate(['./']);
//           return EMPTY;
//         }
//       })
//     );
//   }
// }
