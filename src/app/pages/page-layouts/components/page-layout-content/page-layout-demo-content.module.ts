import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutDemoContentComponent } from './page-layout-demo-content.component';
import { IAMSSharedModule } from '../../../../../@iams/iams-shared.module';

@NgModule({
  declarations: [PageLayoutDemoContentComponent],
  imports: [CommonModule, IAMSSharedModule],
  exports: [PageLayoutDemoContentComponent],
})
export class PageLayoutDemoContentModule {}
