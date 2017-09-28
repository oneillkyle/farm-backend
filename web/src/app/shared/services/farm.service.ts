import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
}

// {
//   farm(id: "RmFybVR5cGU6MQ==") {
//   	id
//     name
//   }
// }
// {
//   allFarms(name: "Kyle") {
//     edges {
//       node {
//         name
//         id
//         budgets {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     }
//   }
// }