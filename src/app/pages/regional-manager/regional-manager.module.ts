import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionalManagerRoutingModule } from './regional-manager-routing.module';
import { RegionalManagerComponent } from './regional-manager.component';


@NgModule({
  declarations: [RegionalManagerComponent],
  imports: [
    CommonModule,
    RegionalManagerRoutingModule
  ]
})
export class RegionalManagerModule { }
