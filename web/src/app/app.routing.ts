import { NgModule } from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'farm',
    loadChildren: 'app/farm/farm.module#FarmModule'
  },
  {
    path: 'about',
    loadChildren: 'app/section/section.module#SectionModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: 'app/section/section.module#SectionModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {}
