import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingOverlayModule } from '../../../../../@iams/shared/loading-overlay/loading-overlay.module';
import { MaterialModule } from '../../../../../@iams/shared/material-components.module';
import { LineChartWidgetComponent } from './line-chart-widget.component';
import { IAMSCardModule } from '../../../../../@iams/shared/card/card.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    LoadingOverlayModule,

    // Chart Widget Style
    IAMSCardModule,
    ChartsModule,
  ],
  declarations: [LineChartWidgetComponent],
  exports: [LineChartWidgetComponent],
})
export class LineChartWidgetModule {}
