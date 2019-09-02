import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
