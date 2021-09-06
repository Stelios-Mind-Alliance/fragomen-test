import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import * as hljs from 'highlight.js/lib/core';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('typescript', typescript);

@Directive({
  selector: 'code[iamsHighlight]',
})
export class HighlightDirective implements AfterViewInit {
  constructor(private elem: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.elem.nativeElement);
  }
}
