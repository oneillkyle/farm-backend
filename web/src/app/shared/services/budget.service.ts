import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Budget } from '../datatypes';
import { getCurrentCsrfHeaders, formatDate } from './utils';

@Injectable()
export class BudgetService {

  constructor(private http: Http) { }

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
      .map((response) => {
        return response.json().data.allFarms.edges.map((edge) => edge.node);
      });
  }

  getBudget(id: string): Observable<Budget> {
    const q = `
      query{
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
      .map((response) => {
        const edges = response.json().data.allFarms.edges;

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

    return this.http.post('/api/graphql', {query: q}, {headers: getCurrentCsrfHeaders()})
      .map((response) => {
        return response.json().data.createBudget.budget;
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

    return this.http.post('/api/graphql', {query: q}, {headers: getCurrentCsrfHeaders()})
      .map((response) => {
        return response.json().data.deleteBudget.id;
      });
  }
}
