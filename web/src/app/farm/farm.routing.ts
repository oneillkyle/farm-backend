import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmComponent } from './farm/farm.component';
import { FarmListComponent } from './farm-list/farm-list.component';

const farmRoutes: Routes = [
  {
    path: '',
    component: FarmListComponent
  },
  {
    path: ':name',
    component: FarmComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(farmRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class FarmRoutingModule { }
