import { Component, HostBinding } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  standalone: false
})
export class AppComponent {
  public loading = true;
  public isLightTheme = false;
  @HostBinding('class') componentCssClass;
  selectedtheme: string;
  currentTheme = 'default-theme';
  currentSport: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private swupdateservice: SwupdateService,
    public overlayContainer: OverlayContainer
  ) {
    const theme = localStorage.getItem('selectedTheme');
    this.onSetTheme();
    this.swupdateservice.checkForUpdates();
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}