import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmComponent } from './farm/farm.component';
import { FarmListComponent } from './farm-list/farm-list.component';

const farmRoutes: Routes = [
  {
    path: '',
    component: FarmComponent,
    children: [
      {
        path: 'budgets',
        loadChildren: 'app/budget/budget.module#BudgetModule'
      },
      {
        path: '',
        loadChildren: 'app/overview/overview.module#OverviewModule'
      }
    ]
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
