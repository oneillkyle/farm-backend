import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Budget } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';
import * as budgetActions from '../../shared/actions/budget';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  budgets: Observable<Budget[]>;

  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.budgets = this.store.select(fromRoot.getBudgets);
  }

  addBudget(budget) {
    console.log(budget);
    this.store.dispatch(new budgetActions.CreateAction(budget));
  }

  save(budget) {
    console.log(budget);
  }

}
