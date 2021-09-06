import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
  imports: [CommonModule, AlertRoutingModule],
  declarations: [AlertComponent],
  entryComponents: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertModule {}
