import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SportRoutingModule } from './sport-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';
//Components

 import { SportHistoryComponent } from './sport-history/sport-history.component';
import { SportHomeComponent } from './sport-home/sport-home.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    SportHistoryComponent, 
    SportHomeComponent, EventsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PdfViewerModule,
    SportRoutingModule,
    FlexLayoutModule
  ]
})
export class SportModule { }
