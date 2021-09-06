import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
} from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'iams-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { class: 'iams-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IAMSCard {}

// noinspection TsLint
@Component({
  selector: 'iams-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'iams-card-header' },
  template: `
    <div class="iams-card-header-heading-group">
      <ng-content select="iams-card-header-heading"></ng-content>
      <ng-content select="iams-card-header-subheading"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="iams-card-header-actions"></ng-content>
  `,
})
export class IAMSCardHeader {}

// noinspection TsLint
@Component({
  selector: 'iams-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'iams-card-content' },
  template: ` <ng-content></ng-content>`,
})
export class IAMSCardContent {}

// noinspection TsLint
@Directive({
  selector: 'iams-card-header-heading',
  host: { class: 'iams-card-header-heading' },
})
export class IAMSCardHeaderTitle {}

// noinspection TsLint
@Directive({
  selector: 'iams-card-header-subheading',
  host: { class: 'iams-card-header-subheading' },
})
export class IAMSCardHeaderSubTitle {}

// noinspection TsLint
@Directive({
  selector: 'iams-card-header-actions',
  host: { class: 'iams-card-header-actions' },
})
export class IAMSCardHeaderActions {}

// noinspection TsLint
@Directive({
  selector: 'iams-card-actions',
  host: {
    class: 'iams-card-actions',
    '[class.iams-card-actions-align-end]': 'align === "end"',
  },
})
export class IAMSCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
