import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Section, AppState } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
