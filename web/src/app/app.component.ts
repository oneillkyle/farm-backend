import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './shared/reducers';
import * as farmActions from './shared/actions/farm';
import * as clientActions from './shared/actions/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ONeill Farm';

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new farmActions.SelectAction('Kyle'));
    this.store.dispatch(new clientActions.SelectSectionsAction(null));
  }
}
