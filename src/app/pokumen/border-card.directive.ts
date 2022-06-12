import { Directive, ElementRef ,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[pkumBorderCard]'
})
export class BorderCardDirective {
     private insialcolor:string  ='#f5f5f5';
     private defaultcolor:string  ='#7FFFD4';
     private heightborder:number  =180;
  constructor(private el: ElementRef) {
     this.setBorder(this.insialcolor);
     
     this.setHeight(this.heightborder);
     
   }
   //@Input('pkumBorderCard') bordercolor:string ='';
   @Input() pkumBorderCard :string='';
   @HostListener('mouseenter') onMouseEnter(){
     this.setBorder(this.pkumBorderCard || this.defaultcolor);
     
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.insialcolor);
   }
   private setHeight(height:number){
     this.el.nativeElement.style.height=`${height}px `;
   }
   private setBorder(color:string){
     this.el.nativeElement.style.border=`solid 4px ${color}`;
   }
}
