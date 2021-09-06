import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsManagerRoutingModule } from './alerts-manager-routing.module';
import { AlertsManagerComponent } from './alerts-manager.component';
import { BackdropModule } from 'src/@iams/shared/backdrop/backdrop.module';
import { NavigationModule } from 'src/app/layout/navigation/navigation.module';
import { ToolbarModule } from 'src/app/layout/toolbar/toolbar.module';
import { MaterialModule } from 'src/@iams/shared/material-components.module';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'src/@iams/shared/click-outside/click-outside.module';
import { RouterModule } from '@angular/router';
import { ScrollbarModule } from 'src/@iams/shared/scrollbar/scrollbar.module';
import { IAMSCardModule } from 'src/@iams/shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    IAMSCardModule,
    AlertsManagerRoutingModule,

    // Core
    BackdropModule,
    NavigationModule,
    ToolbarModule,
  ],
  declarations: [AlertsManagerComponent],
})
export class AlertsManagerModule {}
