import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackdropModule } from '../../@iams/shared/backdrop/backdrop.module';
import { LoadingIndicatorModule } from '../../@iams/shared/loading-indicator/loading-indicator.module';
import { MaterialModule } from '../../@iams/shared/material-components.module';
import { FooterModule } from './footer/footer.module';
import { LayoutComponent } from './layout.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { IAMSSharedModule } from '../../@iams/iams-shared.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,
    IAMSSharedModule,

    // Core
    ToolbarModule,
    SidenavModule,
    FooterModule,
    BackdropModule,
    NavigationModule,
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
