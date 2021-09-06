import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[iamsPageLayout],iams-page-layout',
  host: {
    class: 'iams-page-layout',
  },
})
export class PageLayoutDirective {
  @Input() mode: 'card' | 'simple' = 'simple';

  constructor() {}

  @HostBinding('class.iams-page-layout-card')
  get isCard() {
    return this.mode === 'card';
  }

  @HostBinding('class.iams-page-layout-simple')
  get isSimple() {
    return this.mode === 'simple';
  }
}
