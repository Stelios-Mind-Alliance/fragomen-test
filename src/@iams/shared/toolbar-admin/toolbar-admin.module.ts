import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-components.module';

import { ToolbarAdminComponent } from './toolbar-admin.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [ToolbarAdminComponent],
  exports: [ToolbarAdminComponent],
})
export class ToolbarAdminModule {}
