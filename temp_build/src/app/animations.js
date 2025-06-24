"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slideInAnimation = void 0;
const animations_1 = require("@angular/animations");
exports.slideInAnimation = (0, animations_1.trigger)('routeAnimations', [
    (0, animations_1.transition)('HomePage => SportDetailsPage, HomePage => AthletesPage, HomePage => SchedulePage, HomePage => ShowsPage, HomePage => AboutPage, SportDetailsPage => AthletesPage, SportDetailsPage => ShowsPage, SportsDetailsPage => SchedulePage,  SportDetailsPage => AboutPage, AthletesPage => ShowsPage, AthletesPage => SchedulePage, ShowsPage => AboutPage', [
        (0, animations_1.style)({ position: 'relative' }),
        (0, animations_1.query)(':enter, :leave', [
            (0, animations_1.style)({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ], { optional: true }),
        (0, animations_1.query)(':enter', [(0, animations_1.style)({ right: '-100%', opacity: 0 })], { optional: true }),
        (0, animations_1.query)(':leave', (0, animations_1.animateChild)(), { optional: true }),
        (0, animations_1.group)([
            (0, animations_1.query)(':leave', [(0, animations_1.animate)('200ms ease-out', (0, animations_1.style)({ right: '100%', opacity: 0 }))], { optional: true }),
            (0, animations_1.query)(':enter', [(0, animations_1.animate)('300ms ease-out', (0, animations_1.style)({ right: '0%', opacity: 1 }))], { optional: true })
        ]),
        (0, animations_1.query)(':enter', (0, animations_1.animateChild)(), { optional: true })
    ]),
    (0, animations_1.transition)('AthletesPage => SportDetailsPage, SchedulePage => AthletesPage, SchedulePage => SportDetailsPage, ShowsPage => AthletesPage, ShowsPage => SchedulePage, AboutPage => ShowsPage, AboutPage => SchedulePage, AboutPage => AthletesPage', [
        (0, animations_1.style)({ position: 'relative' }),
        (0, animations_1.query)(':enter, :leave', [
            (0, animations_1.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        (0, animations_1.query)(':enter', [
            (0, animations_1.style)({ left: '-100%' })
        ], { optional: true }),
        (0, animations_1.query)(':leave', (0, animations_1.animateChild)(), { optional: true }),
        (0, animations_1.group)([
            (0, animations_1.query)(':leave', [
                (0, animations_1.animate)('300ms ease-out', (0, animations_1.style)({ left: '100%' }))
            ], { optional: true }),
            (0, animations_1.query)(':enter', [
                (0, animations_1.animate)('300ms ease-out', (0, animations_1.style)({ left: '0%' }))
            ], { optional: true })
        ]),
        (0, animations_1.query)(':enter', (0, animations_1.animateChild)(), { optional: true })
    ]),
    (0, animations_1.transition)('* => HomePage', [
        (0, animations_1.style)({ position: 'relative' }),
        (0, animations_1.query)(':enter, :leave', [
            (0, animations_1.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        (0, animations_1.query)(':enter', [
            (0, animations_1.style)({ left: '-100%' })
        ], { optional: true }),
        (0, animations_1.query)(':leave', (0, animations_1.animateChild)(), { optional: true }),
        (0, animations_1.group)([
            (0, animations_1.query)(':leave', [
                (0, animations_1.animate)('200ms ease-out', (0, animations_1.style)({ left: '100%' }))
            ], { optional: true }),
            (0, animations_1.query)(':enter', [
                (0, animations_1.animate)('300ms ease-out', (0, animations_1.style)({ left: '0%' }))
            ], { optional: true })
        ]),
        (0, animations_1.query)(':enter', (0, animations_1.animateChild)(), { optional: true })
    ])
]);
