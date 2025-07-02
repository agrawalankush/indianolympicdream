import { trigger, transition, style, query, animateChild, animate, group } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition(isBottomToTop, slideToTop()),
    transition(isTopToBottom, slideToBottom()),
    transition(isLeft, slideToLeft()),
    transition(isRight, slideToRight()),
    transition('* => HomePage', slideToRight()) // Default transition to home page
  ]);

function slideToLeft() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('600ms ease-out', style({ left: '100%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('800ms ease-out', style({ left: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ];
}

function slideToRight() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ right: '-100%' })], { optional: true }),
    group([
      query(':leave', [animate('600ms ease-out', style({ right: '100%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('800ms ease-out', style({ right: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ];
}

function slideToTop() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ top: '100%' })], { optional: true }),
    group([
      query(':leave', [animate('600ms ease-out', style({ top: '-100%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('800ms ease-out', style({ top: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ];
}

function slideToBottom() {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ top: '-100%' })], { optional: true }),
    group([
      query(':leave', [animate('600ms ease-out', style({ top: '100%', opacity: 0 }))], { optional: true }),
      query(':enter', [animate('800ms ease-out', style({ top: '0%', opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ];
}

function isLeft(from: any, to: any) {
  const fromOrder = from ? from.order : 0;
  const toOrder = to ? to.order : 0;
  return fromOrder < toOrder;
}

function isRight(from: any, to: any) {
  const fromOrder = from ? from.order : 0;
  const toOrder = to ? to.order : 0;
  return fromOrder > toOrder;
}

function isBottomToTop(from: any, to: any) {
  return to && to.transitionType === 'bottom-to-top';
}

function isTopToBottom(from: any, to: any) {
  return to && to.transitionType === 'top-to-bottom';
}
