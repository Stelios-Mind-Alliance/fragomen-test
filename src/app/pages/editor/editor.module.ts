import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { MaterialModule } from '../../../@iams/shared/material-components.module';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { IAMSSharedModule } from '../../../@iams/iams-shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    MaterialModule,
    QuillModule.forRoot(),
    IAMSSharedModule,
    ReactiveFormsModule,
  ],
  declarations: [EditorComponent],
})
export class EditorModule {}
