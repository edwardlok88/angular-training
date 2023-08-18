import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//<div appHighlight></div>

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight: string = "yellow";

  constructor(private elementRef: ElementRef) {
    //elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = "white";
  }

}
