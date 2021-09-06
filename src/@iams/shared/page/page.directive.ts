import { Directive } from '@angular/core';

@Directive({
  selector: '[iamsPage],iams-page',
  host: {
    class: 'iams-page',
  },
})
export class PageDirective {
  constructor() {}
}
