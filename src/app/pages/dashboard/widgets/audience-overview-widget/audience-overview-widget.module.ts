import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IAMSCardModule } from '../../../../../@iams/shared/card/card.module';
import { LoadingOverlayModule } from '../../../../../@iams/shared/loading-overlay/loading-overlay.module';
import { MaterialModule } from '../../../../../@iams/shared/material-components.module';
import { AudienceOverviewWidgetComponent } from './audience-overview-widget.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

    // Core
    LoadingOverlayModule,
    IAMSCardModule,
    ChartsModule,
  ],
  declarations: [AudienceOverviewWidgetComponent],
  exports: [AudienceOverviewWidgetComponent],
})
export class AudienceOverviewWidgetModule {}
