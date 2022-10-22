import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBooleanIcons]'
})
export class BooleanIconsDirective {
  @Input('appBooleanIcons') inscripciones!: boolean

  constructor(private elemento: ElementRef,
    private renderer: Renderer2) {

     }
     ngOnInit(): void{
      this.renderer.setStyle(this.elemento.nativeElement, 'padding', '2px 15px 2px 15px');
      this.renderer.setStyle(this.elemento.nativeElement, 'border-radius', '40px');
      this.renderer.setStyle(this.elemento.nativeElement, 'margin-left', '15px');
      this.renderer.setStyle(this.elemento.nativeElement, 'color', 'white'),
      this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '12px'),
      this.renderer.setStyle(this.elemento.nativeElement, 'font-weight', '700'),
      this.renderer.setStyle(
        this.elemento.nativeElement, 'background-color', this.inscripciones ? 'green': 'pink')

}
}