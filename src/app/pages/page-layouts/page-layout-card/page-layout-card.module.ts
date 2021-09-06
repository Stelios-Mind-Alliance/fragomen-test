import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutCardRoutingModule } from './page-layout-card-routing.module';
import { PageLayoutCardComponent } from './page-layout-card.component';
import { IAMSSharedModule } from '../../../../@iams/iams-shared.module';
import { PageLayoutDemoContentModule } from '../components/page-layout-content/page-layout-demo-content.module';
import { IAMSCardModule } from '../../../../@iams/shared/card/card.module';

@NgModule({
  declarations: [PageLayoutCardComponent],
  imports: [
    CommonModule,
    PageLayoutCardRoutingModule,
    IAMSSharedModule,
    IAMSCardModule,
    PageLayoutDemoContentModule,
  ],
})
export class PageLayoutCardModule {}
