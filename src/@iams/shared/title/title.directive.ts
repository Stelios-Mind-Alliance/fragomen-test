import { Directive } from '@angular/core';

@Directive({
  selector: '[iamsTitle],iams-title',
  host: {
    class: 'iams-title',
  },
})
export class TitleDirective {
  constructor() {}
}
