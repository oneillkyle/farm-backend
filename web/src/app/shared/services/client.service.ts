import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { get } from 'lodash';

import { Section, Post, Tag, ClientReturn } from '../datatypes';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getSections(): Observable<Section[]> {
    const q = `
      query{
        allSections() {
          edges {
            node{
              id
              title
              description
              posts {
                edges {
                  node {
                    id
                    title
                    description
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.http.get('/api/graphql?query=' + q)
      .map((response: ClientReturn) => {
        return response.data.allSections.edges.map((edge) => edge.node);
      });
  }

  getSection(name: string): Observable<Section> {
    const q = `
      query{
        allSections(name: "${name}") {
          edges {
            node{
              id
              title
              description
              posts {
                edges {
                  node {
                    id
                    title
                    description
                  }
                }
              }
            }
          }
        }
      }
    `;
    return this.http.get('/api/graphql?query=' + q)
      .map((response: ClientReturn) => {
        const edges = response.data.allSections.edges;

        return this.formatSection(edges.length ? edges[0].node : null);
      });
  }

  createSection(section: Section): Observable<Section> {
    const q = `
      mutation sectionMutation {
        createSection(
          title: "${section.title}"
          description: "${section.description}"
          image: "${section.image}"
          allows_posts: "${section.allows_posts}"
        ) {
          section {
            id
            title
            description
            image
            allows_posts
          }
        }
      }
    `;

    return this.http.post('/api/graphql', {query: q})
      .map((response: ClientReturn) => {
        return response.data.createSection.section;
      });
  }

  // updateSection(section: Section): Observable<Section> {
  //   const q = `
  //     mutation budgetMutation {
  //       updateBudget(
  //         id: "${budget.id}",
  //         amount: ${budget.amount},
  //         startDate: "${budget.startDate}",
  //         endDate: "${budget.endDate}"
  //       ) {
  //         budget {
  //           id
  //           amount
  //           startDate
  //           endDate
  //         }
  //       }
  //     }
  //   `;

  //   return this.http.post('/api/graphql', {query: q}, {headers: getCurrentCsrfHeaders()})
  //     .map((response) => {
  //       return response.json().data.updateBudget.budget;
  //     });
  // }

  // deleteBudget(id: string): Observable<string> {
  //   const q = `
  //     mutation budgetMutation {
  //       deleteBudget(id: "${id}") {
  //         id
  //       }
  //     }
  //   `;

  //   return this.http.post('/api/graphql', {query: q}, {headers: getCurrentCsrfHeaders()})
  //     .map((response) => {
  //       return response.json().data.deleteBudget.id;
  //     });
  // }

  formatSection(section) {
    if (!section) { return section; }
    const s = section;
    s.posts = get(s.section, 'edges', []).map((node) => node.node);
    return s;
  }
}
