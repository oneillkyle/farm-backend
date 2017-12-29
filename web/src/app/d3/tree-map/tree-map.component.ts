import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as d3 from 'd3';

import { Farm } from '../../shared'
import { TreeMapService } from './tree-map.service';

@Component({
  selector: 'app-tree-map',
  template: `
    <!-- <svg width="960" height="570"></svg> -->
    <div id="container" width="960" height="570"></div>
    `,
  styles: [`
  svg {
    font: 10px sans-serif;
  }
  path {
    fill: #ccc;
    stroke: #fff;
    stroke-width: .5px;
  }
  path:hover {
    fill: red;
  }
  `],
  providers: [TreeMapService]
})
export class TreeMapComponent implements OnInit {
  @Input() farm: Farm;

  data = {
    'name': 'farm',
    'children': [
     {
      'name': 'fields',
      'children': [
       {
        'name': 'field 1',
        'children': [
         {'name': 'AgglomerativeCluster', 'size': 3938},
         {'name': 'CommunityStructure', 'size': 3812},
         {'name': 'HierarchicalCluster', 'size': 6714},
         {'name': 'MergeEdge', 'size': 743}
        ],
        'size': 3
       },
       {
        'name': 'field 2',
        'children': [
         {'name': 'BetweennessCentrality', 'size': 3534},
         {'name': 'LinkDistance', 'size': 5731},
         {'name': 'MaxFlowMinCut', 'size': 7840},
         {'name': 'ShortestPaths', 'size': 5914},
         {'name': 'SpanningTree', 'size': 3416}
        ],
        'size': 2
       },
       {
        'name': 'field 3',
        'children': [
         {'name': 'AspectRatioBanker', 'size': 7074}
        ],
        'size': 1
       }
      ]
     }
    ]
  };

  constructor(private mapService: TreeMapService) { }

  ngOnInit() {
    // this.mapService.createMap();
    // this.mapService.setData(this.data);
    // this.mapService.createTopo();
    this.mapService.createDataMap();
  }
}
