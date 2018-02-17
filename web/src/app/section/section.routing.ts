import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionComponent } from './section/section.component';
import { PostComponent } from './post/post.component';

const sectionRoutes: Routes = [
  {
    path: '',
    component: SectionComponent,
  },
  {
    path: ':id',
    component: PostComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sectionRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class SectionRoutingModule { }
