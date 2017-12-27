import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

const overviewRoutes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(overviewRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class OverviewRoutingModule { }
