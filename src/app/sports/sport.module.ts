import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SportRoutingModule } from './sport-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Components
import { SportHomeComponent } from './sport-home/sport-home.component';
import { SportDetailsComponent } from './sport-details/sport-details.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    SportHomeComponent, 
    SportDetailsComponent, 
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SportRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SportModule { }
