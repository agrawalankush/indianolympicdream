import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { SportDetailsComponent } from './sport-details/sport-details.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { AthletesComponent } from './athletes/athletes.component';
// import { AllSportsResolverService } from './home/all-sports-resolver.service';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ScheduleComponent } from './schedule/schedule.component';
const routes: Routes = [
  { path: 'home',  component: HomeComponent, data: { animation: 'HomePage'}
    // resolve: {
    //   allsportsdata: AllSportsResolverService
    // }
  },
  { path: 'sports/:sportname', component: SportDetailsComponent, data: { animation: 'SportDetailsPage'} },
  // { path: 'calendar', component: CalendarComponent},
  { path: 'athletes', component: AthletesComponent, data: { animation: 'AthletesPage'}},
  { path: 'schedule', component: ScheduleComponent, data: { animation: 'SchedulePage'}},
  { path: 'shows', component: ShowsComponent, data: { animation: 'ShowsPage'} },
  { path: 'about',  component: AboutComponent, data: { animation: 'AboutPage'} },
  { path: 'internal-error', component: ServerErrorComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
