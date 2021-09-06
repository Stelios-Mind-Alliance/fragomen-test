import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormCreateComponent } from './form-create/form-create.component';
import { MaterialModule } from 'src/@iams/shared/material-components.module';
import { FormsModule } from '@angular/forms';
import { FormCreateModule } from './form-create/form-create.module';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule,
    FormsModule,
    FormCreateModule,
  ],
  declarations: [FormComponent],
  entryComponents: [FormComponent],
  exports: [FormComponent],
})
export class FormModule {}
