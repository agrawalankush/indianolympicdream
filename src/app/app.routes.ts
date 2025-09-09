import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    data: { animation: 'HomePage', order: 2 }
    // resolve: {
    //   allsportsdata: AllSportsResolverService // This resolver would also need to be provided differently if used with standalone components, typically in the route's providers array or globally.
    // }
  },
  {
    path: 'sports/:sportname',
    loadComponent: () => import('./sport-details/sport-details.component').then(m => m.SportDetailsComponent),
    data: { animation: 'SportDetailsPage', order: 1 }
  },
  {
    path: 'athletes',
    loadComponent: () => import('./athletes/athletes.component').then(m => m.AthletesComponent),
    data: { animation: 'AthletesPage', order: 4, transitionType: 'bottom-to-top' }
  },
  {
    path: 'calendar',
    loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent),
    data: { animation: 'CalendarPage', order: 4, transitionType: 'bottom-to-top' }
  },
  {
    path: 'schedule',
    loadComponent: () => import('./schedule/schedule.component').then(m => m.ScheduleComponent),
    data: { animation: 'SchedulePage', order: 5, transitionType: 'bottom-to-top' }
  },
  {
    path: 'shows',
    loadComponent: () => import('./shows/shows.component').then(m => m.ShowsComponent),
    data: { animation: 'ShowsPage', order: 6, transitionType: 'bottom-to-top' }
  },
  {
    path: 'stories',
    loadComponent: () => import('./stories/stories.component').then(m => m.StoriesComponent),
    data: { animation: 'StoriesPage', order: 7, transitionType: 'bottom-to-top' }
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    data: { animation: 'AboutPage', order: 8, transitionType: 'bottom-to-top' }
  },
  // {
  //   path: 'feedback',
  //   loadComponent: () => import('./feedback/feedback.component').then(m => m.FeedbackComponent),
  //   data: { animation: 'FeedbackPage', order: 10, transitionType: 'bottom-to-top' }
  // },
  {
    path: 'internal-error',
    loadComponent: () => import('./server-error/server-error.component').then(m => m.ServerErrorComponent),
    data: { animation: 'InternalErrorPage', order: 10 }
  },
  {
    path: 'tokyo-2025-wc',
    loadComponent: () => import('./tokyo-2025-wc/tokyo-2025-wc.component').then(m => m.Tokyo2025WcComponent),
    children: [
      { path: 'athletes', loadComponent: () => import('./tokyo-2025-wc/tokyo-2025-wc-athletes/tokyo-2025-wc-athletes.component').then(m => m.Tokyo2025WcAthletesComponent), data: { order: 1 } },
      { path: 'schedule', loadComponent: () => import('./tokyo-2025-wc/tokyo-2025-wc-schedule/tokyo-2025-wc-schedule.component').then(m => m.Tokyo2025WcScheduleComponent), data: { transitionType: 'bottom-to-top', order: 2 } },
      { path: 'event-details/:eventId', loadComponent: () => import('./tokyo-2025-wc/event-details/event-details.component').then(m => m.EventDetailsComponent), data: { order: 3} },
      { path: '', redirectTo: 'schedule', pathMatch: 'full' }
    ],
    data: { animation: 'Tokyo2025WcPage', order: 10, transitionType: 'bottom-to-top' }
  },
  { path: '', redirectTo: '/home?edition=2028', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./pagenotfound/pagenotfound.component').then(m => m.PagenotfoundComponent),
    data: { animation: 'NotFoundPage', order: 11 }
  }
];