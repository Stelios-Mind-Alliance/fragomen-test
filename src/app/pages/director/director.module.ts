import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorComponent } from './director.component';


@NgModule({
  declarations: [DirectorComponent],
  imports: [
    CommonModule,
    DirectorRoutingModule
  ]
})
export class DirectorModule { }
