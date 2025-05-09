import { Component, HostBinding } from '@angular/core';
import { SwupdateService } from './swupdate.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet
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
  // Sets initial value to true to show loading spinner on first load
  public loading = true;
  public isLightTheme = false;
  @HostBinding('class') componentCssClass;
  selectedtheme: string;
  currentTheme = 'default-theme';

  constructor(private router: Router, private swupdateservice: SwupdateService, public overlayContainer: OverlayContainer) {
    const theme = localStorage.getItem('selectedTheme');
    this.onSetTheme();
    this.swupdateservice.checkForUpdates();
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
  // For dark and light theme mode
  // changeTheme(): void {
  //      if (this.isLightTheme) {
  //         this.isLightTheme = false;
  //         this.overlayContainer.getContainerElement().classList.add('default-theme');
  //         this.componentCssClass = 'default-theme';
  //      } else {
  //         this.isLightTheme = true;
  //         this.overlayContainer.getContainerElement().classList.add('light-theme');
  //         this.componentCssClass = 'light-theme';
  //     }
  //  }
  onSetTheme() {
    this.currentTheme = this.currentTheme === "default-theme" ? "dark-theme" : "default-theme";
    localStorage.setItem('selectedTheme', this.currentTheme);
    if (this.componentCssClass) {
      this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
      this.componentCssClass = null;
      this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
      this.componentCssClass = this.currentTheme;
    } else {
      this.componentCssClass = this.currentTheme;
      this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
