import { Component, HostBinding } from '@angular/core';
import { SwupdateService } from './swupdate.service';
import { OverlayContainer} from '@angular/cdk/overlay';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Sets initial value to true to show loading spinner on first load
  public loading = true;
  public isLightTheme = false;
  title = 'IndianOlympicDream';
  constructor(private router: Router, private swupdateservice: SwupdateService, public overlayContainer: OverlayContainer) {
    this.swupdateservice.checkForUpdates();
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  @HostBinding('class') componentCssClass;
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
    changeTheme(): void {
         if (this.isLightTheme) {
            this.isLightTheme = false;
            this.overlayContainer.getContainerElement().classList.add('default-theme');
            this.componentCssClass = 'default-theme';
         } else {
            this.isLightTheme = true;
            this.overlayContainer.getContainerElement().classList.add('light-theme');
            this.componentCssClass = 'light-theme';
        }
     }
}
