import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorComponent } from './director.component';

const routes: Routes = [{ path: '', component: DirectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorRoutingModule {}
