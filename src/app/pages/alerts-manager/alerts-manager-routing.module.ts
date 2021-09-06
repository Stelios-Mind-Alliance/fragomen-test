import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsManagerComponent } from './alerts-manager.component';

const routes: Routes = [{ path: '', component: AlertsManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertsManagerRoutingModule {}
