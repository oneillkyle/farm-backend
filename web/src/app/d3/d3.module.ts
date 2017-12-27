import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { TreeMapComponent } from './tree-map/tree-map.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TreeMapComponent],
  exports: [TreeMapComponent]
})
export class D3Module { }
