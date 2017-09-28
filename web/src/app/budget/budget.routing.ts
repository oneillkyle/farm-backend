import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BudgetListComponent } from './budget-list/budget-list.component';

const budgetRoutes: Routes = [
  {
    path: '',
    component: BudgetListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(budgetRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class BudgetRoutingModule { }
