import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as d3 from 'd3';

import { Farm } from '../../shared'
import { TreeMapService } from './tree-map.service';

@Component({
  selector: 'app-tree-map',
  template: `<svg width="960" height="570"></svg>`,
  styles: [],
  providers: [TreeMapService]
})
export class TreeMapComponent implements OnInit {
  @Input() farm: Farm;

  constructor(private mapService: TreeMapService) { }

  ngOnInit() {}
}
