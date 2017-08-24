import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmComponent } from './farm/farm.component';

const farmRoutes: Routes = [
  {
    path: '',
    component: FarmComponent,
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
