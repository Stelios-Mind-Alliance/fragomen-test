import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsmRoutingModule } from './csm-routing.module';
import { CsmComponent } from './csm.component';


@NgModule({
  declarations: [CsmComponent],
  imports: [
    CommonModule,
    CsmRoutingModule
  ]
})
export class CsmModule { }
