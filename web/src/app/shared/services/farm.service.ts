import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { get } from 'lodash';

import { Farm, FarmReturn } from '../datatypes';

@Injectable()
export class FarmService {

  constructor(private http: Http) { }

  getFarms(): Observable<Farm[]> {
    const q = `
      query {
        allFarms {
          edges {
            node {
              id
              name
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

  getFarm(name: string): Observable<Farm> {
    const q = `
      query{
        allFarms(name: "${name}") {
          edges {
            node{
              name
              id
              budgets {
                edges {
                  node {
                    id
                    amount
                    startDate
                    endDate
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.http.get('/api/graphql?query=' + q)
      .map((response) => {
        const edges = response.json().data.allFarms.edges;

        return this.formatFarm(edges.length ? edges[0].node : null);
      });
  }

  createFarm(name: string) {
    const q = `
      mutation farmMutation {
        createFarm(name: ${name}) {
          farm {
            id
            name
          }
        }
      }
    `;

    return this.http.post('/graphql', q)
      .map((response) => {
        console.log(response);
      });
  }

  formatFarm(farm) {
    if (!farm) { return farm; }
    const f = farm;
    f.budgets = get(f.budgets, 'edges', []).map((node) => node.node);
    return f;
  }
}
