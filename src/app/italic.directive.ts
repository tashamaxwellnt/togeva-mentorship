import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appItalic]',
  standalone: true
})
export class ItalicDirective {

  @Input() appItalic = '';

  constructor(private er: ElementRef) { 
    this.er.nativeElement.style.fontStyle = 'italic';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBg(this.appItalic || 'cyan');
  }

  @HostListener('mouseleave') onMouseOut(){
    this.setBg('');
  }

  public setBg(color: string) {
    this.er.nativeElement.style.backgroundColor = color;
  }

}
