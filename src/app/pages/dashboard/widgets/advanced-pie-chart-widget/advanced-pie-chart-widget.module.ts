import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IAMSCardModule } from '../../../../../@iams/shared/card/card.module';
import { LoadingOverlayModule } from '../../../../../@iams/shared/loading-overlay/loading-overlay.module';
import { MaterialModule } from '../../../../../@iams/shared/material-components.module';
import { ScrollbarModule } from '../../../../../@iams/shared/scrollbar/scrollbar.module';
import { AdvancedPieChartWidgetComponent } from './advanced-pie-chart-widget.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    IAMSCardModule,
    LoadingOverlayModule,
    ScrollbarModule,
    ChartsModule,
  ],
  declarations: [AdvancedPieChartWidgetComponent],
  exports: [AdvancedPieChartWidgetComponent],
})
export class AdvancedPieChartWidgetModule {}
