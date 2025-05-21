import { Component, HostBinding, OnInit } from '@angular/core';
import { SwupdateService } from './swupdate.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet,
  ActivatedRoute
} from '@angular/router';
import { slideInAnimation } from './animations';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  standalone: false
})
export class AppComponent implements OnInit {
  public loading = true;
  public isLightTheme = false;
  @HostBinding('class') componentCssClass;
  selectedtheme: string;
  currentTheme = 'default-theme';
  currentSport: string = '';
  olympicOptions = [
    { id: 'tokyo2020', name: 'Tokyo 2020', logo: 'assets/images/olympics/tokyo2020_no_bg.png' },
    // { id: 'paris2024', name: 'Paris 2024', logo: 'assets/images/olympics/paris2024.png' },
    // { id: 'la2028', name: 'LA 2028', logo: 'assets/images/olympics/la2028.png' }
  ];

  selectedOlympics = this.olympicOptions[0].name;
  selectedOlympicsLogo: string = this.olympicOptions[0].logo;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private swupdateservice: SwupdateService,
    public overlayContainer: OverlayContainer,
    private analyticsService: AnalyticsService
  ) {
    this.onSetTheme();
    this.swupdateservice.checkForUpdates();
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    /** TO DO: V2.0 feature to supoport multiple olympics
    this.route.queryParams.subscribe(params => {
      this.selectedOlympics = params['olympics'] || 'la2028';
      this.updateSelectedOlympicsLogo();
    });
     */
  }

  ngOnInit() {
    // Track page views when routes change
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.analyticsService.pageView(event.urlAfterRedirects, document.title);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
      const childRoute = this.route.firstChild;
      const sportname = childRoute?.snapshot.paramMap.get('sportname');
      this.currentSport = sportname || '';
    }
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  isActivePath(): boolean {
    const url = this.router.url;
    return url.startsWith('/sports/') || url === '/' || url === '/home';
  }

  onSetTheme() {
    this.currentTheme = this.currentTheme === "default-theme" ? "dark-theme" : "default-theme";
    localStorage.setItem('selectedTheme', this.currentTheme);
    if (this.componentCssClass) {
      this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
    }
    this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
    this.componentCssClass = this.currentTheme;
  }

  /* TO DO: V2.0 feature to supoport multiple olympics
  onOlympicsChange(event: MatSelectChange) {
    const selection = event.value;
    this.selectedOlympics = selection;
    this.updateSelectedOlympicsLogo();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { olympics: selection },
      queryParamsHandling: 'merge'
    });
  }
    private updateSelectedOlympicsLogo(): void {
    const selected = this.olympicOptions.find(option => option.id === this.selectedOlympics);
    this.selectedOlympicsLogo = selected ? selected.logo : this.olympicOptions[0].logo;
  }
  */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  navigateToAboutApp() {
    this.router.navigate(['/about']);
  }

  openAboutMe() {
    window.open('https://github.com/agrawalankush', '_blank');
  }
}