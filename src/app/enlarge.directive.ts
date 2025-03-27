import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEnlarge]',
  standalone: true
})
export class EnlargeDirective {

  constructor(private er: ElementRef) {
    this.er.nativeElement.style.fontSize = '30px';
  }
}
