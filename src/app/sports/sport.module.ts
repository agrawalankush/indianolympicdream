import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SportRoutingModule } from './sport-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';

//Components
import { SportHomeComponent } from './sport-home/sport-home.component';
import { SportDetailsComponent } from './sport-details/sport-details.component';

@NgModule({
  declarations: [
    SportHomeComponent, 
    SportDetailsComponent
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
