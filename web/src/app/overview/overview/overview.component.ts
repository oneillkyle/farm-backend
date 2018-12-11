import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Farm } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  farm: Observable<Farm>;

  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.farm = this.store.select(fromRoot.getFarm);
  }

}
