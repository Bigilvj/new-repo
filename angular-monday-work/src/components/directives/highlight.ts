import { Directive, HostListener, Input } from '@angular/core';
import{ElementRef} from '@angular/core';
@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {
 @Input() appHighlight="";
  constructor(private ele:ElementRef) { }
 


  @HostListener('mouseenter')onMouseEnter(){
    this.ele.nativeElement.style.backgroundColor=this.appHighlight;
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.ele.nativeElement.style.backgroundColor="";
  }




}
