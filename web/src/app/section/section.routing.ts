import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectionComponent } from './section/section.component';
import { PostComponent } from '../shared/components/post/post.component';

const sectionRoutes: Routes = [
  {
    path: 'about',
    component: SectionComponent,
    data: { title: 'About' }
  },
  {
    path: 'sale',
    component: SectionComponent,
    data: { title: 'For Sale' }
  },
  {
    path: '',
    component: SectionComponent,
    data: { title: 'Home' }
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
