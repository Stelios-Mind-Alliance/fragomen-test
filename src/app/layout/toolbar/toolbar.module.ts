import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IAMSCardModule } from '../../../@iams/shared/card/card.module';
import { ClickOutsideModule } from '../../../@iams/shared/click-outside/click-outside.module';
import { MaterialModule } from '../../../@iams/shared/material-components.module';
import { ScrollbarModule } from '../../../@iams/shared/scrollbar/scrollbar.module';
import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { ToolbarSearchBarComponent } from './toolbar-search-bar/toolbar-search-bar.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarSettingsComponent } from './toolbar-settings/toolbar-settings.component';
import { ToolbarCreateComponent } from './toolbar-create/toolbar-create.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    IAMSCardModule,
  ],
  declarations: [
    ToolbarComponent,
    ToolbarUserComponent,
    ToolbarNotificationsComponent,
    ToolbarSearchBarComponent,
    ToolbarSettingsComponent,
    ToolbarCreateComponent,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
