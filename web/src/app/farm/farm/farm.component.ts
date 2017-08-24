import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Farm, AppState } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  farms: Observable<Farm[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new farmActions.SearchAction(null));
    this.farms = this.store.select(fromRoot.getFarms).map(res => {
      return res;
    });
  }

  getFarm(name) {
    this.store.dispatch(new farmActions.SelectAction(name));
    this.router.navigate(['/farm', name]);
  }
}
