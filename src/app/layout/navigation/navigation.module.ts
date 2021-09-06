import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { IAMSSharedModule } from 'src/@iams/iams-shared.module';

@NgModule({
  imports: [CommonModule, IAMSSharedModule],
  declarations: [NavigationComponent, NavigationItemComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
