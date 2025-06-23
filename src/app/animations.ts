import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => SportDetailsPage, HomePage => AthletesPage, HomePage => SchedulePage, HomePage => ShowsPage, HomePage => AboutPage, SportDetailsPage => AthletesPage, SportDetailsPage => ShowsPage, SportsDetailsPage => SchedulePage,  SportDetailsPage => AboutPage, AthletesPage => ShowsPage, AthletesPage => SchedulePage, ShowsPage => AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [style({ right: '-100%', opacity: 0 })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('200ms ease-out', style({ right: '100%', opacity: 0 }))], { optional: true }),
        query(':enter', [animate('300ms ease-out', style({ right: '0%', opacity: 1 }))], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true })
    ]),

    transition('AthletesPage => SportDetailsPage, SchedulePage => AthletesPage, SchedulePage => SportDetailsPage, ShowsPage => AthletesPage, ShowsPage => SchedulePage, AboutPage => ShowsPage, AboutPage => SchedulePage, AboutPage => AthletesPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true })
    ]),

    transition('* => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true })
    ])
  ]);