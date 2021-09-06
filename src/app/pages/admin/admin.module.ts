import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from 'src/@iams/shared/material-components.module';
import { FormsModule } from '@angular/forms';
import { IAMSSharedModule } from 'src/@iams/iams-shared.module';
import { ListModule } from 'src/@iams/shared/list/list.module';
import { CreateUserModule } from './create-user/create-user.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    MaterialModule,
    IAMSSharedModule,

    //CORE
    ListModule,
    CreateUserModule,
  ],
  declarations: [AdminComponent],
  exports: [AdminComponent],
})
export class AdminModule {}
