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

  { path: 'sports/:sportname', 
    component: SportHomeComponent,
    children:[
      { path: 'qualifying',  component: SportQualifyingSysystemComponent },
      { path: 'calendar',  component: SportQualifyingCalenderComponent },
      { path: 'athletes',  component: QualifiedAthletesComponent },
      { path: 'history',  component: SportHistoryComponent }
    ]
   }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
