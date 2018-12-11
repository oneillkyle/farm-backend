import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Budget, BudgetReturn } from '../datatypes';
import { getCurrentCsrfHeaders, formatDate } from './utils';

@Injectable()
export class BudgetService {

  constructor(private http: HttpClient) { }

  getBudgets(): Observable<Budget[]> {
    const q = `
      query {
        allBudgets {
          edges {
            node {
              id
            }
          }
        }
      }
    `
    return this.http.get('/api/graphql?query=' + q)
      .map((response: BudgetReturn) => {
        return response.data.allBudgets.edges.map((edge) => edge.node);
      });
  }

  getBudget(id: string): Observable<Budget> {
    const q = `
      query {
        allBudgets(id: "${id}") {
          edges {
            node{
              id
            }
          }
        }
      }
    `;
    return this.http.get('/api/graphql?query=' + q)
      .map((response: BudgetReturn) => {
        const edges = response.data.allBudgets.edges;

        return edges.length ? edges[0].node : null;
      });
  }

  createBudget(budget: Budget): Observable<Budget> {
    const q = `
      mutation budgetMutation {
        createBudget(
          name: "Kyle",
          amount: ${budget.amount},
          startDate: "${formatDate(budget.startDate)}",
          endDate: "${formatDate(budget.endDate)}"
        ) {
          budget {
            id
            amount
            startDate
            endDate
          }
        }
      }
    `;

    return this.http.post('/api/graphql', {query: q})
      .map((response: BudgetReturn) => {
        return response.data.createBudget.budget;
      });
  }

  updateBudget(budget: Budget): Observable<Budget> {
    const q = `
      mutation budgetMutation {
        updateBudget(
          id: "${budget.id}",
          amount: ${budget.amount},
          startDate: "${budget.startDate}",
          endDate: "${budget.endDate}"
        ) {
          budget {
            id
            amount
            startDate
            endDate
          }
        }
      }
    `;

    return this.http.post('/api/graphql', {query: q})
      .map((response: BudgetReturn) => {
        return response.data.updateBudget.budget;
      });
  }

  deleteBudget(id: string): Observable<string> {
    const q = `
      mutation budgetMutation {
        deleteBudget(id: "${id}") {
          id
        }
      }
    `;

    return this.http.post('/api/graphql', {query: q})
      .map((response: BudgetReturn) => {
        return response.data.deleteBudget.id;
      });
  }
}
