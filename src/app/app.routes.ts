import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: { animation: 'HomePage' }
    // resolve: {
    //   allsportsdata: AllSportsResolverService // This resolver would also need to be provided differently if used with standalone components, typically in the route's providers array or globally.
    // }
  },
  {
    path: 'sports/:sportname',
    loadComponent: () => import('./sport-details/sport-details.component').then(m => m.SportDetailsComponent),
    data: { animation: 'SportDetailsPage' }
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent)
  },
  {
    path: 'athletes',
    loadComponent: () => import('./athletes/athletes.component').then(m => m.AthletesComponent),
    data: { animation: 'AthletesPage' }
  },
  {
    path: 'schedule',
    loadComponent: () => import('./schedule/schedule.component').then(m => m.ScheduleComponent),
    data: { animation: 'SchedulePage' }
  },
  {
    path: 'shows',
    loadComponent: () => import('./shows/shows.component').then(m => m.ShowsComponent),
    data: { animation: 'ShowsPage' }
  },
  {
    path: 'stories',
    loadComponent: () => import('./stories/stories.component').then(m => m.StoriesComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    data: { animation: 'AboutPage' }
  },
  {
    path: 'internal-error',
    loadComponent: () => import('./server-error/server-error.component').then(m => m.ServerErrorComponent)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./feedback/feedback.component').then(m => m.FeedbackComponent)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./pagenotfound/pagenotfound.component').then(m => m.PagenotfoundComponent)
  }
];
