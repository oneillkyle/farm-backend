import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import { environment } from '../../../../src/environments/environment';
declare var document: any;

export function getCurrentCsrfHeaders() {
  const myCsrfToken = getCookie('csrftoken');
  // if (!myCsrfToken.length) { myCsrfToken = this.getCookie(this.fallBackCsrfName); }
  const headers = new Headers();
  headers.append('X-CSRFToken', myCsrfToken);
  headers.append('Content-Type', 'application/json');
  return headers;
}

export function getCookie(cName: string) {
  const regexString = cName + '[\\w\-.]*?=(.+?)(;|$)';
  const regex = new RegExp(regexString);
  const cookies = document.cookie;
  if (regex.test(cookies)) {
    return decodeURI(regex.exec(cookies)[1]);
  }
  return '';
}

export function formatDate(d) {
  const date = new Date(d);
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) { month = '0' + month };
  if (day.length < 2) { day = '0' + day };

  return [year, month, day].join('-');
}
