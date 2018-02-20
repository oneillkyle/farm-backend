import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin/admin.component';
import { SectionAdminComponent } from './section-admin/section-admin.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, SectionAdminComponent]
})
export class AdminModule { }
