import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MarkdownModule } from 'ngx-md';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FarmEffects } from './shared/effects';
import { BudgetEffects } from './shared/effects';
import { reducers } from './shared/reducers';

import { FarmService, BudgetService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      initialState: {}
    }),
    EffectsModule.forRoot([
      FarmEffects,
      BudgetEffects
    ]),
    MarkdownModule.forRoot()
  ],
  providers: [FarmService, BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
