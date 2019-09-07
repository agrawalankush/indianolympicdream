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
const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'sports/:sportname', component: SportDetailsComponent,
  resolve: {
    sportdata: SportDetailsResolverService
  }},
  { path: 'calendar', component: CalendarComponent},
  { path: 'athletes', component: AthletesComponent},
  { path: 'shows', component: ShowsComponent },
  { path: 'about',  component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
