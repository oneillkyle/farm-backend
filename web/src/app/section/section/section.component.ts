import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, withLatestFrom, filter, skipWhile } from 'rxjs/operators';

import { Section, AppState } from '../../shared'
import * as fromRoot from '../../shared/reducers';
import * as farmActions from '../../shared/actions/farm';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  section: Observable<Section>;
  admin: Observable<boolean> = Observable.of(true);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.section = this.store.select(fromRoot.getSections).pipe(
      withLatestFrom(this.route.data),
      map(([sections, {title}]) => {
        return sections.find(section => section.title === title);
      })
    );
  }

  onPostSave(post) {}

  onDeletePost(post) {}

  onCancelEdit(post) {}


}
