import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { SportDetailsComponent } from './sport-details/sport-details.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AthletesComponent } from './athletes/athletes.component';
import { SportDetailsResolverService } from './sport-details/sport-details-resolver.service';
import { AthletesResolverService } from './athletes/athletes-resolver.service';
import { AllSportsResolverService } from './home/all-sports-resolver.service';
import { ShowsResolverService } from './shows/shows-resolver.service';
import { ServerErrorComponent } from './server-error/server-error.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent,
    resolve: {
      allsportsdata: AllSportsResolverService
    }
  },
  { path: 'sports/:sportname', component: SportDetailsComponent,
    resolve: {
      sportdata: SportDetailsResolverService
    }
  },
  { path: 'calendar', component: CalendarComponent },
  { path: 'athletes', component: AthletesComponent,
    resolve: {
      athletesdata: AthletesResolverService
    }
  },
  { path: 'shows', component: ShowsComponent,
    resolve: {
      showsdata: ShowsResolverService
    }
  },
  { path: 'about',  component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'internal-error', component: ServerErrorComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
