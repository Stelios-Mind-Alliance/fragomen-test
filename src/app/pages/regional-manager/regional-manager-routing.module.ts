import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionalManagerComponent } from './regional-manager.component';

const routes: Routes = [{ path: '', component: RegionalManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionalManagerRoutingModule {}
