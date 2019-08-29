import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SportHomeComponent } from './sport-home/sport-home.component';
import { SportDetailsComponent } from './sport-details/sport-details.component';
import { CalendarComponent } from './calendar/calendar.component';
const routes: Routes = [

  { path: 'sports/:sportname', 
    component: SportHomeComponent,
     children:[
       { path: '', component: SportDetailsComponent}
     ]
  },
  { path: 'calendar', component: CalendarComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
