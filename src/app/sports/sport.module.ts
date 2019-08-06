import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SportRoutingModule } from './sport-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
//Components
import { SportQualifyingSysystemComponent } from './sport-qualifying-sysystem/sport-qualifying-sysystem.component';
import { SportQualifyingCalenderComponent } from './sport-qualifying-calender/sport-qualifying-calender.component';
import { QualifiedAthletesComponent } from './qualified-athletes/qualified-athletes.component';
import { PotentialtAthletesComponent } from './potentialt-athletes/potentialt-athletes.component';
import { SportHistoryComponent } from './sport-history/sport-history.component';
import { SportHomeComponent } from './sport-home/sport-home.component';



@NgModule({
  declarations: [
    SportQualifyingSysystemComponent, 
    SportQualifyingCalenderComponent, 
    QualifiedAthletesComponent, 
    PotentialtAthletesComponent, 
    SportHistoryComponent, 
    SportHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PdfViewerModule,
    SportRoutingModule
  ]
})
export class SportModule { }
