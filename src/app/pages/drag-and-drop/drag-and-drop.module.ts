import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IAMSCardModule } from '../../../@iams/shared/card/card.module';
import { MaterialModule } from '../../../@iams/shared/material-components.module';
import { ScrollbarModule } from '../../../@iams/shared/scrollbar/scrollbar.module';
import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop.component';
import { IAMSSharedModule } from '../../../@iams/iams-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropRoutingModule,
    IAMSSharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollbarModule,
    DragDropModule,
    IAMSCardModule,
  ],
  declarations: [DragAndDropComponent],
})
export class DragAndDropModule {}
