import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { select, geoPath, GeoPermissibleObjects, geoEquirectangular } from 'd3';
import * as d3 from 'd3-geo';
import * as Datamap from 'datamaps';
// import { feature, mesh } from 'topojson-client';
// import * as topojson from 'topojson';

import { topo, topo2, topo3, topo4, topo5 } from '../topo';

@Injectable()
export class TreeMapService {
  // private treemap: d3.TreemapLayout<{}>;
  // private svg: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
  // private color: any;
  // private format = d3.format(',d');
  constructor() { }

  // createTopo() {
  //   const width = 960;
  //   const height = 500;
  //   // const svg = select('svg');

  //   // const projection = d3.geoMercator()
  //   //   .scale(1000)
  //   //   // .scale(100)
  //   //   .translate([width / 2, height / 2])

  //   // const path = d3.geoPath()
  //   //   .projection(projection);

  //   // const feat = topo3;
  //   // svg.append('path')
  //   //   .attr('d', path(topo3))

  //   // // const projection = d3.geoAlbers()
  //   // // .translate([-123.91415884734998, 44.77358071275885])
  //   // // .scale(100000)
  //   // // .center([-123, 40.70]);

  //   // // const projection = d3.geoercator()
  //   // //   .scale(1500)
  //   // //   // Center the Map in Colombia
  //   // //   .center([-74, 4.5])
  //   // //   .translate([width / 2, height / 2]);
  //   const path = d3.geoPath();

  //   const svg = select('svg');
  //   const geojson = feature(topo4, topo4.objects['test_qgis']);
  //   console.log('geojson', geojson)

  //   svg.selectAll('path')
  //     .data(geojson.features)
  //     .enter().append('path')
  //     .attr('d', path);
  // }

  createDataMap() {
    const map = new Datamap({
      element: document.getElementById('container'),
      geographyConfig: {
        dataJson: topo5
      },
      scope: '19585-Siletz-Highway-Siletz-OR',
      height: '570',
      setProjection: function (element, options) {
        function matrix(a, b, c, d, tx, ty) {
          return d3.geoTransform({
            point: function (x, y) {
              this.stream.point(a * x + b * y + tx, c * x + d * y + ty);
            }
          });
        }
        const projection = matrix(1, 0, 0, -1, 130, 570);
        const path = d3.geoPath().projection(projection);
        return { path: path, projection };
      },
    });
    console.log(map);
  }

  // createTopo() {

  //   const svg = select('svg');

  //   const path = d3.geoPath();

  //   svg.append('g')
  //     .attr('class', 'states')
  //     .selectAll('path')
  //     .data(feature(topo2, topo2.objects['19585-Siletz-Highway-Siletz-OR']).features)
  //     .enter().append('path')
  //     .attr('d', path);

  //   // svg.append('path')
  //   //   .attr('class', 'state-borders')
  //   //   .attr('d', path(mesh(topo2, topo2.objects['19585-Siletz-Highway-Siletz-OR'], function (a, b) { return a !== b; })));
  // }

  // createMap() {
  //   this.svg = d3.select('svg');
  //   const width = +this.svg.attr('width');
  //   const height = +this.svg.attr('height');

  //   this.color = d3.scaleOrdinal(d3.schemeCategory20.map(this.fader));
  //   this.format = d3.format(',d');

  //   this.treemap = d3.treemap()
  //     .tile(d3.treemapResquarify)
  //     .size([width, height])
  //     .round(true)
  //     .paddingInner(1);
  // }

  // fader(color) {
  //   return d3.interpolateRgb(color, '#fff')(0.2);
  // }

  // setData(data) {
  //   const root = d3.hierarchy(data)
  //     .eachBefore(function (d) { d.data.id = (d.parent ? d.parent.data.id + '.' : '') + d.data.name; })
  //     .sum(this.sumBySize)
  //     .sort(function (a, b) { return b.height - a.height || b.value - a.value; });

  //   this.treemap(root);

  //   const cell = this.svg.selectAll('g')
  //     .data(root.leaves())
  //     .enter().append('g')
  //     .attr('transform', function (d) { return 'translate(' + d['x0'] + ',' + d['y0'] + ')'; });

  //   cell.append('rect')
  //     .attr('id', function (d) { return d.data.id; })
  //     .attr('width', function (d) { return d['x1'] - d['x0']; })
  //     .attr('height', function (d) { return d['y1'] - d['y0']; })
  //     .attr('fill', (d) => { return this.color(d.parent.data.id); });

  //   cell.append('clipPath')
  //     .attr('id', function (d) { return 'clip-' + d.data.id; })
  //     .append('use')
  //     .attr('xlink:href', function (d) { return '#' + d.data.id; });

  //   cell.append('text')
  //     .attr('clip-path', function (d) { return 'url(#clip-' + d.data.id + ')'; })
  //     .selectAll('tspan')
  //     .data(function (d) { return d.data.name.split(/(?=[A-Z][^A-Z])/g); })
  //     .enter().append('tspan')
  //     .attr('x', 4)
  //     .attr('y', function (d, i) { return 13 + i * 10; })
  //     .text((d) => { return d as string; });

  //   cell.append('title')
  //     .text((d) => { return d.data.id + '\n' + this.format(d.value); });

  //   d3.selectAll('input')
  //     .data([this.sumBySize, this.sumByCount], function (d) { return d ? d['name'] : this['value']; })
  //     .on('change', changed);

  //   const timeout = d3.timeout(function () {
  //     d3.select('input[value="sumByCount"]')
  //       .property('checked', true)
  //       .dispatch('change');
  //   }, 2000);

  //   function changed(sum) {
  //     timeout.stop();

  //     this.treemap(root.sum(sum));

  //     cell.transition()
  //       .duration(750)
  //       .attr('transform', function (d) { return 'translate(' + d['x0'] + ',' + d['y0'] + ')'; })
  //       .select('rect')
  //       .attr('width', function (d) { return d['x1'] - d['x0']; })
  //       .attr('height', function (d) { return d['y1'] - d['y0']; });
  //   }
  // }

  // sumByCount(d) {
  //   return d.children ? 0 : 1;
  // }

  // sumBySize(d) {
  //   return d.size;
  // }
}
