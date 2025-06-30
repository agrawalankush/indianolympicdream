import { Component, HostBinding, OnInit } from '@angular/core';
import { SwupdateService } from './swupdate.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouterOutlet, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { slideInAnimation } from './animations';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelectChange } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
// LoaderComponent is imported below with other standalone components from './shared/components/loader/loader.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LoaderComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AppComponent implements OnInit {
  public loading = true;
  public isLightTheme = false;
  @HostBinding('class') componentCssClass;
  selectedtheme: string;
  currentTheme = 'default-theme';
  currentSport: string = '';
  olympicOptions = [
    { id: '2020', name: 'Tokyo 2020', logo: 'assets/images/olympics/tokyo2020_no_bg.png' },
    // { id: '2024', name: 'Paris 2024', logo: 'assets/images/olympics/paris2024.png' },
    { id: '2028', name: 'LA 2028', logo: 'assets/images/olympics/la2028.png' }
  ];

  selectedOlympics = this.olympicOptions[1].id;
  selectedOlympicsLogo: string = this.olympicOptions[1].logo;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private swupdateservice: SwupdateService,
    public overlayContainer: OverlayContainer
  ) {
    this.loadThemePreference();
    this.swupdateservice.checkForUpdates();
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    this.route.queryParams.subscribe(params => {
      this.selectedOlympics = params['edition'] || '2028';
      this.updateSelectedOlympicsLogo();
    });
  }

  ngOnInit() {
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

  loadThemePreference() {
    // Load theme from localStorage or default to light theme
    const savedTheme = localStorage.getItem('selectedTheme');
    this.currentTheme = savedTheme || 'default-theme';

    // Apply the theme
    if (this.componentCssClass) {
      this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
    }
    this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
    this.componentCssClass = this.currentTheme;
  }

  onSetTheme() {
    // Toggle theme
    this.currentTheme = this.currentTheme === "default-theme" ? "dark-theme" : "default-theme";
    localStorage.setItem('selectedTheme', this.currentTheme);

    // Apply theme
    if (this.componentCssClass) {
      this.overlayContainer.getContainerElement().classList.remove(this.componentCssClass);
    }
    this.overlayContainer.getContainerElement().classList.add(this.currentTheme);
    this.componentCssClass = this.currentTheme;
  }

  onOlympicsChange(selection: string) {
    this.selectedOlympics = selection;
    this.updateSelectedOlympicsLogo();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { edition: selection },
      queryParamsHandling: 'merge'
    });
  }
  private updateSelectedOlympicsLogo(): void {
    const selected = this.olympicOptions.find(option => option.id === this.selectedOlympics);
    this.selectedOlympicsLogo = selected ? selected.logo : this.olympicOptions[0].logo;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  navigateToAboutApp() {
    this.router.navigate(['/about'], { queryParams: { edition: this.selectedOlympics } });
  }

  openAboutMe() {
    window.open('https://github.com/agrawalankush', '_blank');
  }
}