import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { httpInterceptorProviders } from './http-interceptors/index';
// pipes

import { HumanizePipe} from './shared/components/loader/pipes/humanize';
// componets
import { HomeComponent} from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowsComponent } from './shows/shows.component';
import { SafePipe } from './safepipe';
import { AboutComponent } from './about/about.component';
import { SportDetailsComponent } from './sport-details/sport-details.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { AthletesComponent } from './athletes/athletes.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ShowsComponent,
    SafePipe,
    SportDetailsComponent,
   // CalendarComponent,
    AthletesComponent,
    AboutComponent,
    LoaderComponent,
    HumanizePipe,
    ServerErrorComponent,
    ScheduleComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' })
  ],
  entryComponents:[
    EventDetailsComponent
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
