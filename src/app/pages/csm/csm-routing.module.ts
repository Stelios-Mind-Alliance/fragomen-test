import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsmComponent } from './csm.component';

const routes: Routes = [{ path: '', component: CsmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsmRoutingModule {}
