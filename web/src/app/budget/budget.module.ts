import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetRoutingModule } from './budget.routing';
import { BudgetListComponent } from './budget-list/budget-list.component';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule
  ],
  declarations: [BudgetListComponent],
  exports: [BudgetListComponent]
})
export class BudgetModule { }
