import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { SportHistoryComponent } from './sport-history/sport-history.component';
import { SportHomeComponent } from './sport-home/sport-home.component';

const routes: Routes = [

  { path: 'sports/:sportname', 
    component: SportHomeComponent
    // children:[
    //   { path: 'history',  component: SportHistoryComponent }
    // ]
   }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
