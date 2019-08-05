import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SportQualifyingSysystemComponent } from './sport-qualifying-sysystem/sport-qualifying-sysystem.component';
import { SportQualifyingCalenderComponent } from './sport-qualifying-calender/sport-qualifying-calender.component';
import { QualifiedAthletesComponent } from './qualified-athletes/qualified-athletes.component';
import { PotentialtAthletesComponent } from './potentialt-athletes/potentialt-athletes.component';
import { SportHistoryComponent } from './sport-history/sport-history.component';
import { SportHomeComponent } from './sport-home/sport-home.component';

const routes: Routes = [

  { path: 'sports/:sportname',  component: SportHomeComponent },
  { path: 'qualifying/:sportname',  component: SportQualifyingSysystemComponent },
  { path: 'calendar/:sportname',  component: SportQualifyingCalenderComponent },
  { path: 'qualified/:sportname',  component: QualifiedAthletesComponent },
  { path: 'potential/:sportname',  component: PotentialtAthletesComponent },
  { path: 'history/:sportname',  component: SportHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
