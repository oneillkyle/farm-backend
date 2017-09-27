import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Farm } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  farm: Observable<Farm>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   if (params['name']) {
    //     this.store.dispatch(new farmActions.SelectAction(params['name']));
    //   }
    // });
    this.farm = this.store.select(fromRoot.getFarm).map(res => {
      return res;
    });
  }

  getFarm(name) {
    this.store.dispatch(new farmActions.SelectAction(name));
    this.router.navigate(['/farm', name]);
  }
}
