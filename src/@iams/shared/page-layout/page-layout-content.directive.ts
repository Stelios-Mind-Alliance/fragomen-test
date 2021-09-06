import { Directive } from '@angular/core';

@Directive({
  selector: '[iamsPageLayoutContent],iams-page-layout-content',
  host: {
    class: 'iams-page-layout-content',
  },
})
export class PageLayoutContentDirective {
  constructor() {}
}
