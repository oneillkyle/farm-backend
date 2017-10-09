import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetRoutingModule } from './budget.routing';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SharedModule } from '../shared';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule,
    SharedModule
  ],
  declarations: [BudgetListComponent, BudgetComponent],
  exports: [BudgetListComponent]
})
export class BudgetModule { }
