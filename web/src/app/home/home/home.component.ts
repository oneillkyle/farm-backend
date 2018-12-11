import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Farm, AppState } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
