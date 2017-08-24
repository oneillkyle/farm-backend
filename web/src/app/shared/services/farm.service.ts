import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';

import { Farm, FarmReturn } from '../datatypes';

@Injectable()
export class FarmService {

  constructor(private http: Http) { }

  getFarms(): Observable<Farm[]> {
    const q = gql`
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
    return this.http.get('/graphql?query=' + q)
      .map((response) => {
        return response.json().data.allFarms.edges.map((edge) => edge.node);
      });
  }

  getFarm(id: string) {
    const q = gql`
      query {
        farm(id: ${id}) {
          name
        }
      }
    `
    return this.http.get('/graphql?query=' + q)
      .map((response) => {
        console.log(response);
      });
  }

  createFarm(name: string) {
    const q = gql`
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

  // return this.http
  //              .get(`api/heroes/?name=${term}`)
  //              .map(response => response.json().data as Hero[])
  // .catch(error => {
  //       // TODO: add real error handling
  //       console.log(error);
  //       return Observable.of<Hero[]>([]);
  //     });

}
