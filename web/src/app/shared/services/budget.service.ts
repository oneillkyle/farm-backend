import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Budget } from '../datatypes';

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

  createBudget(name: string, amount: number, startDate: string, endDate: string) {
    const q = `
      mutation budgetMutation {
        createBudget(
          name: ${name}
          amount: ${amount},
          startDate: ${startDate},
          endDate: ${endDate}
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

    return this.http.post('/graphql', q)
      .map((response) => {
        console.log(response);
      });
  }
}