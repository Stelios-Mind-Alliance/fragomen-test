import { Directive } from '@angular/core';

@Directive({
  selector: '[iamsPageLayoutHeader],iams-page-layout-header',
  host: {
    class: 'iams-page-layout-header',
  },
})
export class PageLayoutHeaderDirective {
  constructor() {}
}
