import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IAMSCardModule } from '../../../../@iams/shared/card/card.module';
import { HighlightModule } from '../../../../@iams/shared/highlightjs/highlight.module';
import { MaterialModule } from '../../../../@iams/shared/material-components.module';
import { FormElementsRoutingModule } from './form-elements-routing.module';
import { FormElementsComponent } from './form-elements.component';
import { IAMSSharedModule } from '../../../../@iams/iams-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    MaterialModule,
    IAMSSharedModule,
    ReactiveFormsModule,

    // Core
    HighlightModule,
    IAMSCardModule,
  ],
  declarations: [FormElementsComponent],
})
export class FormElementsModule {}
