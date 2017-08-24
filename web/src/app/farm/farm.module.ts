import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { FarmRoutingModule } from './farm.routing';
import { FarmComponent } from './farm/farm.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FarmRoutingModule
  ],
  declarations: [FarmComponent]
})
export class FarmModule { }
