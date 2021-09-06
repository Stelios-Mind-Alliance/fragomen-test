import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { SmeComponent } from './sme.component';

@NgModule({
  imports: [CommonModule, SmeRoutingModule],
  declarations: [SmeComponent],
  exports: [SmeComponent],
})
export class SmeModule {}
