import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IAMSCard,
  IAMSCardActions,
  IAMSCardContent,
  IAMSCardHeader,
  IAMSCardHeaderActions,
  IAMSCardHeaderSubTitle,
  IAMSCardHeaderTitle,
} from './card.component';

const cardComponents = [
  IAMSCard,
  IAMSCardHeader,
  IAMSCardHeaderTitle,
  IAMSCardHeaderSubTitle,
  IAMSCardHeaderActions,
  IAMSCardContent,
  IAMSCardActions,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...cardComponents],
  exports: [...cardComponents],
})
export class IAMSCardModule {}
