import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IAMSCardModule } from '../../../../../@iams/shared/card/card.module';
import { MaterialModule } from '../../../../../@iams/shared/material-components.module';
import { RealtimeUsersWidgetComponent } from './realtime-users-widget.component';
import { ScrollbarModule } from '../../../../../@iams/shared/scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    IAMSCardModule,
    ScrollbarModule,
  ],
  declarations: [RealtimeUsersWidgetComponent],
  exports: [RealtimeUsersWidgetComponent],
})
export class RealtimeUsersWidgetModule {}
