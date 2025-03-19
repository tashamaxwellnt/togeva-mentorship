import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMoml]',
  standalone: true
})
export class MomlDirective {

  @Input() appMoml = '';

  @HostListener('mouseenter') onMouse(){
    this.setBg(this.appMoml);
  }

  @HostListener('mouseleave') onMouseOut(){
    this.setBg('');
  }

  constructor(private er: ElementRef) { }

  setBg(color: string){
    this.er.nativeElement.style.backgroundColor = color;
  }

}
