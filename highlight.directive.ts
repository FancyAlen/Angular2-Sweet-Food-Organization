import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight]' })
/** 高亮标注 */
export class HighlightDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'lightblue');
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
