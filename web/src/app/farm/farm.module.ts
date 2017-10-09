import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { FarmRoutingModule } from './farm.routing';
import { FarmComponent } from './farm/farm.component';
import { FarmListComponent } from './farm-list/farm-list.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FarmRoutingModule
  ],
  declarations: [FarmComponent, FarmListComponent]
})
export class FarmModule { }
