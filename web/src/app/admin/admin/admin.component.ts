import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Section, AppState } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';
import * as clientActions from '../../shared/actions/client';

@Component({
  selector: 'app-section',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit {
  sections: Observable<Section[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sections = this.store.select(fromRoot.getSections);
  }

  saveSection(section) {
    this.store.dispatch(new clientActions.UpdateSectionAction(section));
    console.log(section);
  }
  addSection(section) {
    this.store.dispatch(new clientActions.CreateSectionAction(section));
    console.log(section);
  }
  deleteSection(section) {
    console.log(section);
  }
}
