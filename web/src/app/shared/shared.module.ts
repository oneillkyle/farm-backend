import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FarmService } from './services';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCardModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  MdCommonModule,
  ObserveContentModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdCheckboxModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCardModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  MdCommonModule,
  ObserveContentModule,
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    MATERIAL_MODULES,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    FarmService
  ]
})
export class SharedModule { }
