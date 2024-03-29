import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { SectionRoutingModule } from './section.routing';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SectionRoutingModule
  ],
  declarations: [SectionComponent],
  exports: [SectionComponent]
})
export class SectionModule { }
