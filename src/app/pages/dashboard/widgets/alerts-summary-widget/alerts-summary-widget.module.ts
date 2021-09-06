import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IAMSCardModule } from '../../../../../@iams/shared/card/card.module';
import { LoadingOverlayModule } from '../../../../../@iams/shared/loading-overlay/loading-overlay.module';
import { MaterialModule } from '../../../../../@iams/shared/material-components.module';
import { AlertsSummaryWidgetComponent } from './alerts-summary-widget.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    LoadingOverlayModule,
    IAMSCardModule,
    ChartsModule,
  ],
  declarations: [AlertsSummaryWidgetComponent],
  exports: [AlertsSummaryWidgetComponent],
})
export class AlertsSummaryWidgetModule {}
