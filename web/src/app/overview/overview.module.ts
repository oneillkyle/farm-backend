import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3Module } from '../d3/d3.module';
import { SharedModule } from '../shared';

import { OverviewRoutingModule } from './overview.routing';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    D3Module,
    OverviewRoutingModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
