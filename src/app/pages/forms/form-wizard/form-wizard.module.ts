import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../@iams/shared/material-components.module';
import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';
import { IAMSSharedModule } from '../../../../@iams/iams-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    IAMSSharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [FormWizardComponent],
})
export class FormWizardModule {}
