import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@iams/shared/material-components.module';
import { IAMSSharedModule } from 'src/@iams/iams-shared.module';
import { ListModule } from 'src/@iams/shared/list/list.module';
import { CreateAdminModule } from './create-admin/create-admin.module';

@NgModule({
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    FormsModule,
    MaterialModule,
    IAMSSharedModule,

    //CORE
    ListModule,
    CreateAdminModule,
  ],
  declarations: [SuperAdminComponent],
  exports: [SuperAdminComponent],
})
export class SuperAdminModule {}
