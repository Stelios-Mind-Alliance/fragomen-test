import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateComponent } from './form-create.component';
import { MultiSelectDropdownComponent } from 'src/@iams/shared/multi-select-dropdown/multi-select-dropdown.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@iams/shared/material-components.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [FormCreateComponent, MultiSelectDropdownComponent],
  entryComponents: [FormCreateComponent],
  exports: [FormCreateComponent],
})
export class FormCreateModule {}
